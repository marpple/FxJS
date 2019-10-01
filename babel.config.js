module.exports = function (api) {
  api.cache(false);
  const is_cjs = process.env.BABEL_ENV === 'cjs';
  const target = is_cjs ? { node: 6 } : { ie: 11 };
  const presets = [
    [
      "@babel/env",
      {
        "targets": target,
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ];
  const plugins = is_cjs ? ["@babel/plugin-proposal-export-namespace-from", "transform-es2015-modules-simple-commonjs"] : [];
  return { presets, plugins };
};