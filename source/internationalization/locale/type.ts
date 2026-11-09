/** A piece of copy written in every published language, for example `{ en: "Hello", pt: "Olá" }`. */
export type Translated<Locale extends string = string> = Record<Locale, string>;
