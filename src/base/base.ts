import type { FastifyBaseLogger } from "fastify";

export abstract class ConfigReader<T> {
  protected logger?: FastifyBaseLogger;

  public constructor(logger?: FastifyBaseLogger) {
    this.logger = logger;
  }

  public abstract read(): Promise<T>;
}
