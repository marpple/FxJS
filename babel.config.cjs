module.exports = (api) => {
  const BABEL_ENV = api.env();
  const targets =
    BABEL_ENV === "cjs"
      ? { node: 6 }
      : BABEL_ENV === "mjs"
      ? "last 1 chrome version"
      : BABEL_ENV === "modern"
      ? ">= 2% and last 2 versions"
      : { ie: 11 };

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
  };
};
