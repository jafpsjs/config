import { parse } from "yaml";
import { FileConfigReader } from "#base";
import type { UnknownRecord } from "type-fest";

export class YamlConfigReader extends FileConfigReader {
  public parse(content: string): Promise<UnknownRecord> {
    return parse(content, { prettyErrors: true, strict: true, stringKeys: true, uniqueKeys: true });
  }
}
