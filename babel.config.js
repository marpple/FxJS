module.exports = function (api) {
  api.cache(false);
  const target = process.env.BABEL_ENV === 'cjs' ? { node: 6 } : { ie: 11 };
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
  return { presets };
};