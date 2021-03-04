import { ApolloLink } from '@apollo/client';
import { refreshToken } from '../tokenMethods';

const resetTokenLink = new ApolloLink(
  (operation, forward) => forward(operation).map(response => {
    const context = operation.getContext();
    refreshToken(context);
    return response;
  }
));

export default resetTokenLink;