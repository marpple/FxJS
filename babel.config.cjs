module.exports = (api) => {
  const BABEL_ENV = api.env();
  const targets =
    BABEL_ENV === "modern"
      ? ">= 2% and last 2 versions"
      : BABEL_ENV === "legacy"
      ? { ie: 11 }
      : { ie: 11, node: 8 };

  const plugins =
    BABEL_ENV === "mjs"
      ? ["./build_scripts/transform_import_extension.cjs"]
      : [];

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets,
          useBuiltIns: "usage",
          corejs: 3,
          modules: BABEL_ENV === "mjs" ? false : "auto",
        },
      ],
    ],
    plugins,
  };
};
