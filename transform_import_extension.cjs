module.exports = () => ({
  visitor: {
    ImportDeclaration(path, state) {
      const { source } = path.node;
      const { value } = source;
      if (!value.endsWith(".js")) source.value = value + ".js";
    },
  },
});
