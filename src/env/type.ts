import type { EnvProperty } from "./env-property/index.js";


export type EnvObject = {
  [key: string]: EnvObject | EnvProperty<any>;
};

export type EnvPropertyType<T> = T extends EnvProperty<infer U> ? U : never;

export type EnvObjectType<T> = T extends EnvObject ? {
  [P in keyof T]?: T[P] extends EnvObject ? EnvObjectType<T[P]> : EnvPropertyType<T[P]>
} : never;
