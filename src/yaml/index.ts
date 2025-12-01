import { readFile } from "node:fs/promises";
import { parse } from "yaml";
import { ConfigReader } from "../config-reader.js";

export class YamlConfigReader extends ConfigReader<unknown> {
  private readonly filePath: string;

  public constructor(filePath: string) {
    super();
    this.filePath = filePath;
  }

  public async read(): Promise<unknown> {
    const data = await readFile(this.filePath, { encoding: "utf-8" });
    return parse(data, { prettyErrors: true, strict: true, stringKeys: true, uniqueKeys: true });
  }
}
