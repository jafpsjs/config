import { EnvProperty } from "./env-property.js";

export type BooleanEnvPropertyOptions = {
  ignoreCase?: boolean;
};

export class BooleanEnvProperty extends EnvProperty<boolean> {
  private readonly ignoreCase: boolean;

  public constructor(env: string, opts?: BooleanEnvPropertyOptions) {
    super(env);
    const { ignoreCase = true } = opts ?? {};
    this.ignoreCase = ignoreCase;
  }

  public override parse(input: string): boolean | undefined {
    const value = this.ignoreCase ? input.toLowerCase() : input;
    switch (value) {
      case "false":
        return false;
      case "true":
        return true;
      default:
        return undefined;
    }
  }
}
