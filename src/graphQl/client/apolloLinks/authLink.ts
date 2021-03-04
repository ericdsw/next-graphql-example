import { setContext } from '@apollo/client/link/context';

import { getToken } from '../tokenMethods';

const authLink = setContext((_, { headers }) => {
  const token = getToken();
  if (token) {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${token}`
      }
    }
  }
  return { headers }
});

export default authLink;