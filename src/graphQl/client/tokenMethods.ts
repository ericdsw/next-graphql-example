export const TOKEN_KEY = 'test-token';
export const TOKEN_HEADER_KEY = 'x-refresh-token';

export function registerToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function refreshToken(sourceContext: Record<string, any>): void {
  const { response: { headers } } = sourceContext;
  if (headers) {
    const token = headers[TOKEN_HEADER_KEY];
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
    }
  }
}

export function eraseToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}
