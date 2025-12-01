/* node:coverage disable */
import type { TSchema } from "typebox";
import type { TLocalizedValidationError } from "typebox/error";

export interface ReadConfigErrorOptions {
  fieldErrors: TLocalizedValidationError[];
  message?: string;
  schema: TSchema;
  value: unknown;
}

/* node:coverage enable */

export class ReadConfigError extends Error {
  public readonly fieldErrors: TLocalizedValidationError[];
  public readonly schema: TSchema;
  public readonly value: unknown;

  public constructor(opts: ReadConfigErrorOptions) {
    const {
      fieldErrors,
      message = "Value(s) do not match JSON schema",
      schema,
      value
    } = opts;
    super(message);
    this.fieldErrors = fieldErrors;
    this.schema = schema;
    this.value = value;
  }
}
