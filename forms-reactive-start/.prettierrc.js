module.exports = {
  /**
   * Specify the line length that the printer will wrap on.
   * In code styleguides, maximum line length rules are often set to 100 or 120.
   * https://prettier.io/docs/en/options.html#print-width
   */
  printWidth: 120,
  /**
   * Specify the number of spaces per indentation-level.
   * https://prettier.io/docs/en/options.html#tab-width
   */
  tabWidth: 2,
  /**
   * Indent lines with tabs instead of spaces.
   * https://prettier.io/docs/en/options.html#tabs
   */
  useTabs: false,
  /**
   * Print semicolons at the ends of statements.
   * true - Add a semicolon at the end of every statement.
   * false - Only add semicolons at the beginning of lines that may introduce ASI failures.
   * https://prettier.io/docs/en/options.html#semicolons
   */
  semi: true,
  /**
   * Use single quotes instead of double quotes.
   * https://prettier.io/docs/en/options.html#quotes
   */
  singleQuote: true,
  /**
   * Change when properties in objects are quoted.
   * "as-needed" - Only add quotes around object properties where required.
   * "consistent" - If at least one property in an object requires quotes, quote all properties.
   * "preserve" - Respect the input use of quotes in object properties.
   * https://prettier.io/docs/en/options.html#quote-props
   */
  quoteProps: 'as-needed',
  /**
   * Print trailing commas wherever possible in multi-line comma-separated syntactic structures.
   * (A single-line array, for example, never gets trailing commas.)
   * "es5" - Trailing commas where valid in ES5 (objects, arrays, etc.). No trailing commas in type parameters in TypeScript.
   * "none" - No trailing commas.
   * "all" - Trailing commas wherever possible (including function parameters and calls).
   * https://prettier.io/docs/en/options.html#trailing-commas
   */
  trailingComma: 'es5',
  /**
   * Print spaces between brackets in object literals.
   * true - Example: { foo: bar }.
   * false - Example: {foo: bar}.
   * https://prettier.io/docs/en/options.html#bracket-spacing
   */
  bracketSpacing: true,
  /**
   * Put the > of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line
   * instead of being alone on the next line (does not apply to self closing elements).
   * https://prettier.io/docs/en/options.html#bracket-line
   */
  bracketSameLine: false,
  /**
   * Include parentheses around a sole arrow function parameter.
   * "always" - Always include parens. Example: (x) => x
   * "avoid" - Omit parens when possible. Example: x => x
   * https://prettier.io/docs/en/options.html#arrow-function-parentheses
   */
  arrowParens: 'always',
  /**
   * Specify the global whitespace sensitivity for HTML, Vue, Angular, and Handlebars.
   * See whitespace-sensitive formatting for more info.
   * "css" - Respect the default value of CSS display property. For Handlebars treated same as strict.
   * "strict" - Whitespace (or the lack of it) around all tags is considered significant.
   * "ignore" - Whitespace (or the lack of it) around all tags is considered insignificant.
   * https://prettier.io/docs/en/options.html#html-whitespace-sensitivity
   */
  htmlWhitespaceSensitivity: 'css',
  /**
   * For historical reasons, there exist two common flavors of line endings in text files.
   * That is \n (or LF for Line Feed) and \r\n (or CRLF for Carriage Return + Line Feed).
   * "lf" – Line Feed only (\n), common on Linux and macOS as well as inside git repos
   * "crlf" - Carriage Return + Line Feed characters (\r\n), common on Windows
   * "cr" - Carriage Return character only (\r), used very rarely
   * "auto" - Maintain existing line endings (mixed values within one file are normalised by looking at what’s used after the first line)
   * https://prettier.io/docs/en/options.html#end-of-line
   */
  endOfLine: 'auto',
};
