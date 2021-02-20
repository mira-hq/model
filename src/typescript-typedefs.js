const { printSchemaWithDirectives } = require("@graphql-tools/utils");

// https://github.com/dotansimha/graphql-code-generator/issues/3899
const print = (schema) => `
  export const typeDefs = gql\`${schema}\`;
`;

module.exports = {
  plugin: (schema) => print(printSchemaWithDirectives(schema)),
};
