import typescript from "rollup-plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";

export default {
  input: "./src/main.ts",
  output: {
    file: "dist/ajanuw-completer.js",
    format: "umd",
    sourcemap: true,
    name: "AjanuwCompleter"
  },
  plugins: [
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript"),
      declaration: true
    }),
    sourceMaps()
  ]
};
