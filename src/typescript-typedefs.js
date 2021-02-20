const { printSchemaWithDirectives } = require("@graphql-tools/utils");

const print = (schema) => `
  export const typeDefs = gql\`${schema}\`;
`;

module.exports = {
  plugin: (schema) => print(printSchemaWithDirectives(schema)),
};
