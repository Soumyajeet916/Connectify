import { OAuth2Client } from 'google-auth-library';

const client = new OAuth2Client({
  clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
  redirectUri: 'http://localhost:3000/api/auth/callback/google'
});

export const initiateGoogleLogin = async () => {
  try {
    const url = await client.generateAuthUrl({
      access_type: 'offline',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    });
    return url;
  } catch (error) {
    throw new Error(`Failed to initialize Google login: ${error.message}`);
  }
};

export const handleGoogleCallback = async (code) => {
  try {
    const { tokens } = await client.getToken(code);
    client.setCredentials(tokens);

    const userInfo = await client.request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo'
    });

    return {
      success: true,
      user: userInfo.data
    };
  } catch (error) {
    throw new Error(`Failed to complete authentication: ${error.message}`);
  }
};