import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'
import { baseLink, authLink, resetTokenLink } from './apolloLinks';

const rootLink = ApolloLink.from([
  /** Additional middlewares */
  authLink,
  resetTokenLink,

  /** This is a terminating link, so it must be registered last on the array */
  baseLink,
])

const client = new ApolloClient({
  link: rootLink,
  cache: new InMemoryCache()
});

export default client;
