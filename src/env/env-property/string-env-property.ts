import { EnvProperty } from "./env-property.js";

export type StringEnvPropertyOptions = {};

export class StringEnvProperty extends EnvProperty<string> {
  public constructor(env: string, _opts?: StringEnvPropertyOptions) {
    super(env);
  }

  protected override parse(input: string): string | undefined {
    return input;
  }
}
