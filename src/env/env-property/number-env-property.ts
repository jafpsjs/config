import { EnvProperty } from "./env-property.js";

export class NumberEnvProperty extends EnvProperty<number> {
  public constructor(env: string) {
    super(env);
  }

  public override parse(input: string): number | undefined {
    const output = Number.parseFloat(input);
    return Number.isNaN(output) ? undefined : output;
  }
}
