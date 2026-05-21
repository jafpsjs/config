export abstract class EnvProperty<T> {
  private readonly env: string;

  public constructor(env: string) {
    this.env = env;
  }

  protected abstract parse(input: string): T | undefined;

  public parseEnv(values: Record<string, string | undefined>): T | undefined {
    const value = values[this.env];
    if (typeof value === "undefined") {
      return undefined;
    }
    return this.parse(value);
  }
}

export type EnvPropertyValue<T> = T extends EnvProperty<infer U> ? U : never;
