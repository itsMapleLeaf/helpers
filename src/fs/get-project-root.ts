import { join } from "node:path"
import { isFile } from "./is-file.js"

/**
 * Find the first directory in the parent directories that contains a `package.json` file.
 * Returns undefined if none was found
 * @param fromFolder The directory to start from
 */
export async function getProjectRoot(
  fromFolder: string,
): Promise<string | undefined> {
  if (await isFile(join(fromFolder, "package.json"))) {
    return fromFolder
  }

  const parentFolder = join(fromFolder, "..")
  if (parentFolder === fromFolder) {
    return undefined
  }

  return getProjectRoot(parentFolder)
}
