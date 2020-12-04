module.exports = () => ({
  visitor: {
    ImportDeclaration(path, state) {
      const { source } = path.node;
      const { value } = source;
      if (value.startsWith(".js") && !value.endsWith(".js")) {
        source.value = value + ".js";
      }
    },
  },
});
