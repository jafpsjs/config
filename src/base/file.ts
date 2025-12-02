import { readFile } from "node:fs/promises";
import { isObject } from "#util";
import { ConfigReader } from "./base.js";
import type { FastifyBaseLogger } from "fastify";
import type { UnknownRecord } from "type-fest";

export abstract class FileConfigReader extends ConfigReader<UnknownRecord> {
  protected readonly filePath: string;

  public constructor(filePath: string, logger?: FastifyBaseLogger) {
    super(logger);
    this.filePath = filePath;
  }

  public async read(): Promise<UnknownRecord> {
    try {
      const content = await readFile(this.filePath, { encoding: "utf-8" });
      const data = await this.parse(content);
      if (!isObject(data)) {
        throw new Error("Expecting JSON object!");
      }
      return data;
    } catch (err) {
      this.logger?.info({ err }, `Failed to read config from (${this.filePath})`);
      return {};
    }
  }

  public abstract parse(content: string): Promise<UnknownRecord>;
}
