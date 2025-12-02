import { EnvProperty } from "./env-property.js";

export type StringArrayEnvPropertyOptions = {
  separator?: string;
};

export class StringArrayEnvProperty extends EnvProperty<string[]> {
  private readonly separator: string;

  public constructor(env: string, opts?: StringArrayEnvPropertyOptions) {
    super(env);
    const { separator = "," } = opts ?? {};
    this.separator = separator;
  }

  public override parse(input: string): string[] | undefined {
    return input.split(this.separator);
  }
}
