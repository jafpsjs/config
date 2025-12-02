import { FileConfigReader } from "#base";
import type { UnknownRecord } from "type-fest";

export class JsonConfigReader extends FileConfigReader {
  public parse(content: string): Promise<UnknownRecord> {
    return JSON.parse(content);
  }
}
