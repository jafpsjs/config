import { EnvProperty } from "./env-property.js";

export class StringEnvProperty extends EnvProperty<string> {
  public constructor(env: string) {
    super(env);
  }

  public override parse(input: string): string | undefined {
    return input;
  }
}
