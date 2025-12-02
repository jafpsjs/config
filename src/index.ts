import { mergician } from "mergician";
import { Compile } from "typebox/compile";
import { ReadConfigError } from "./read-config-error.js";
import type { MergicianOptions } from "mergician";
import type { StaticDecode, TSchema } from "typebox";
import type { ConfigReader } from "#base";

export type ReadConfigOptions<T extends TSchema> = {
  mergeOptions?: MergicianOptions;
  readers: ConfigReader<any>[];
  schema: T;
};

export async function readConfig<T extends TSchema>(opts: ReadConfigOptions<T>): Promise<StaticDecode<T>> {
  const { mergeOptions = {}, readers, schema } = opts;
  const result = await Promise.all(readers.map(reader => reader.read()));
  const config = mergician(mergeOptions)({}, ...result);
  const compiledSchema = Compile({}, schema);
  const defaultValues = compiledSchema.Default(config);
  if (!compiledSchema.Check(defaultValues)) {
    const fieldErrors = [...compiledSchema.Errors(defaultValues)];
    throw new ReadConfigError({ fieldErrors, schema, value: defaultValues });
  }
  return compiledSchema.Clean(compiledSchema.Decode(defaultValues)) as StaticDecode<T>;
}

export * from "./read-config-error.js";
