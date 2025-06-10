import { GraphQLScalarType, Kind } from 'graphql';

const isUUID = (value: unknown): value is string =>
  typeof value === 'string' &&
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value);

export const UUIDType = new GraphQLScalarType({
  name: 'UUID',
  description: 'Custom scalar for UUID values',
  serialize(value) {
    if (!isUUID(value)) throw new TypeError('Invalid UUID');
    return value;
  },
  parseValue(value) {
    if (!isUUID(value)) throw new TypeError('Invalid UUID');
    return value;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING && isUUID(ast.value)) {
      return ast.value;
    }
    return null;
  },
});
