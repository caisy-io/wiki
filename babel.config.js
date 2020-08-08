module.exports = function (api) {
  api.cache(true);
  const presets = [["@babel/env", { targets: ["last 2 versions"] }]];
  const plugins = [
    ["@babel/transform-runtime"],
    ["@babel/plugin-proposal-optional-chaining"],
  ];
  return { presets, plugins };
};
