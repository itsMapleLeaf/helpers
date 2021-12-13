import glob from "fast-glob"
import { writeFile } from "node:fs/promises"
import { posix } from "node:path"
import { fileURLToPath } from "node:url"
import { build } from "tsup"
import { getProjectRoot } from "../src/fs/get-project-root.js"

const projectRoot =
  (await getProjectRoot(posix.dirname(fileURLToPath(import.meta.url)))) ??
  process.cwd()

const sourceFolder = posix.join(projectRoot, "src")
const mainPath = posix.join(sourceFolder, "main.ts")

const files = await glob("src/**/*.{ts,tsx}", {
  cwd: projectRoot,
  ignore: ["src/main.*", "src/**/*.test.*"],
})

const mainContent = files
  .map((path) => path.replace(/\.tsx?$/, ".js"))
  .map((path) => `export * from './${posix.relative(sourceFolder, path)}'`)
  .join("\n")

await writeFile(mainPath, mainContent)

await build({
  entry: [mainPath],
  target: "node16",
  format: ["cjs", "esm"],
  clean: true,
  dts: true,
})
