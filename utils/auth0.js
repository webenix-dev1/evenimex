import auth0 from "auth0-js";

const webAuth = new auth0.WebAuth({
  domain: process.env.NEXT_PUBLIC_NEXTAUTH_AUTH0_DOMAIN,
  clientID: process.env.NEXT_PUBLIC_NEXTAUTH_AUTH0_CLIENT_ID,
  responseType: "id_token",
  audience: process.env.NEXT_PUBLIC_NEXTAUTH_AUTH0_AUDIENCE,
  redirectUri: process.env.NEXT_PUBLIC_NEXTAUTH_AUTH0_AUDIENCE,
  responseMode: "form_post",
});

export default webAuth;
