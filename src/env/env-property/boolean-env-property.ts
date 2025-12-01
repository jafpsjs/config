import { EnvProperty } from "./env-property.js";

export class BooleanEnvProperty extends EnvProperty<boolean> {
  public constructor(env: string) {
    super(env);
  }

  public override parse(input: string): boolean | undefined {
    switch (input.toLowerCase()) {
      case "false":
        return false;
      case "true":
        return true;
      default:
        return undefined;
    }
  }
}
