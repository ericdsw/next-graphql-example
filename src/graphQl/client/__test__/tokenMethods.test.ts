import { mocked } from 'ts-jest/utils';
import {
  registerToken,
  refreshToken,
  eraseToken,
  getToken,
  TOKEN_KEY,
  TOKEN_HEADER_KEY
} from '../tokenMethods';

it('correctly registers token', () => {
  registerToken('mockToken');
  expect(localStorage.setItem).toHaveBeenCalledWith(TOKEN_KEY, 'mockToken');
});

it('correctly erases token', () => {
  eraseToken();
  expect(localStorage.removeItem).toHaveBeenCalledWith(TOKEN_KEY);
});

it('correctly returns the current token', () => {
  mocked(localStorage.getItem).mockReturnValue('mock-result-token');
  const result = getToken();
  expect(result).toBe('mock-result-token');
  expect(localStorage.getItem).toHaveBeenCalledWith(TOKEN_KEY);
});

it('correctly refreshes token with valid source context', () => {
  const context = {
    response: {
      headers: {
        [TOKEN_HEADER_KEY]: 'refreshed-token'
      }
    }
  };
  refreshToken(context);
  expect(localStorage.setItem).toHaveBeenCalledWith(TOKEN_KEY, 'refreshed-token');
});

it('will not refresh token if the context has no headers', () => {
  const context: Record<string, any> = {
    response: {}
  };
  refreshToken(context);
  expect(localStorage.setItem).not.toHaveBeenCalled();
});

it('will not refresh token if the headers have no token field', () => {
  const context: Record<string, any> = {
    response: {
      headers: {}
    }
  };
  refreshToken(context);
  expect(localStorage.setItem).not.toHaveBeenCalled();
});