import { HttpLink } from '@apollo/client';
import {
  ApolloClient,
  InMemoryCache,
  registerApolloClient,
} from '@apollo/client-integration-nextjs';

const MODE = process.env.NODE_ENV;

export const { getClient, query } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri:
        MODE === 'development'
          ? process.env.NEXT_PUBLIC_URI_DEV
          : process.env.NEXT_PUBLIC_URI_PROD,
    }),
  });
});
