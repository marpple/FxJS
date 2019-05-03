module.exports = function (api) {
  api.cache(false);
  const presets = [
    [
      "@babel/env",
      {
        "targets": {
          ie: 11
        },
        "useBuiltIns": "usage",
        "corejs": 3
      }
    ]
  ];
  return { presets };
};