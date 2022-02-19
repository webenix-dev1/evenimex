import nookies from "nookies";
import routerConst from "./router";

export const getCookie = (name) => {
  return nookies.get(name);
};

export const setCookie = (name, value, req = null) => {
  return nookies.set(req, name, value);
};

export const removeCookie = (name, req = null) => {
  return nookies.destroy(req, name);
};

export const protectedRoute = async (req, page = null) => {
  const session = nookies.get(req);
  if (!session?.["player-auth0-token"]) {
    return {
      status: true,
      redirectRoute: {
        redirect: {
          destination: routerConst.LOGIN,
          permanent: false,
        },
      },
    };
  }

  if (page) return { status: false };

  if (session?.["player-create-account"] == 0) {
    return {
      status: true,
      redirectRoute: {
        redirect: {
          destination: routerConst.SETUP_PROFILE,
          permanent: false,
        },
      },
    };
  }

  return { status: false };
};

export const redirectRoute = async (req) => {
  const session = nookies.get(req);
  if (session?.["player-auth0-token"]) {
    return {
      status: true,
      redirectRoute: {
        redirect: {
          destination: "/",
          permanent: false,
        },
      },
    };
  }
  return { status: false };
};
