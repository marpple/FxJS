module.exports = (api) => {
  const BABEL_ENV = api.env();
  const targets =
    BABEL_ENV === "cjs"
      ? { node: 6 }
      : BABEL_ENV === "modern"
      ? ">= 2% and last 2 versions"
      : { ie: 11 };

  const plugins =
    BABEL_ENV === "cjs"
      ? [
          [
            "transform-require-extensions",
            {
              extensions: {
                ".js": ".cjs",
              },
            },
          ],
        ]
      : [];

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets,
          useBuiltIns: "usage",
          corejs: 3,
        },
      ],
    ],
    plugins,
  };
};
