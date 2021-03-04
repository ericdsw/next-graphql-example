import { createHttpLink } from '@apollo/client';

const baseLink = createHttpLink({
  uri: 'http://localhost:8080/graphql',
  headers: {
    'Accept': '*/*',
  }
});

export default baseLink;