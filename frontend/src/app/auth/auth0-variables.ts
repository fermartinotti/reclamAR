interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'YOUR_CLIENT_ID',
  domain: 'YOUR_DOMAIN',
  callbackURL: 'http://localhost:3000/callback'
};
