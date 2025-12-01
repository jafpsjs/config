export abstract class EnvProperty<T> {
  public env: string;

  public constructor(env: string) {
    this.env = env;
  }

  public abstract parse(input: string): T | undefined;
}
