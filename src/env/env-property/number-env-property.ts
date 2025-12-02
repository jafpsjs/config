import { EnvProperty } from "./env-property.js";

export type NumberEnvPropertyOptions = {
  type: "float" | "int";
};

export class NumberEnvProperty extends EnvProperty<number> {
  private readonly type: "float" | "int";

  public constructor(env: string, opts?: NumberEnvPropertyOptions) {
    super(env);
    const { type = "float" } = opts ?? {};
    this.type = type;
  }

  public override parse(input: string): number | undefined {
    let output: number = Number.NaN;
    switch (this.type) {
      case "float": {
        output = Number.parseFloat(input);
        break;
      }
      case "int":
        output = Number.parseInt(input);
        break;
    }
    return Number.isNaN(output) ? undefined : output;
  }
}
