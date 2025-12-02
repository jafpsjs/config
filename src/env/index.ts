import { env } from "process";
import { ConfigReader } from "#base";
import { readEnv } from "./read-env.js";
import type { FastifyBaseLogger } from "fastify";
import type { EnvObject, EnvObjectType } from "./type.js";

export class EnvConfigReader<T extends EnvObject> extends ConfigReader<EnvObjectType<T>> {
  private readonly opts: T;
  private readonly values: Record<string, string | undefined>;

  public constructor(opts: T, values: Record<string, string | undefined> = env, logger?: FastifyBaseLogger) {
    super(logger);
    this.opts = opts;
    this.values = values;
  }

  public async read(): Promise<EnvObjectType<T>> {
    return readEnv(this.opts, this.values);
  }
}

export * from "./env-property/index.js";
export type * from "./type.js";
