const fs = require('node:fs/promises');

export async function readFile(filename: string): Promise<string> {
  try {
    const data = await fs.readFile(filename, { encoding: 'utf-8' });
    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
