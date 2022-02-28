const prefixRouteV1 = (route) => {
  return `v1/${route}`;
};

const apiRouter = {
  SIGNUP: prefixRouteV1("auth/signup"),
  FORGOTPASS: prefixRouteV1("auth/forgot-password"),
  RESETPASS: prefixRouteV1("auth/reset-password"),
  LOGIN: prefixRouteV1("auth/login"),
  SOCIALLOGIN: prefixRouteV1("auth/social-login"),
  REFRESHTOKEN: prefixRouteV1("user/refresh-token"),
  USER: prefixRouteV1("user"),
  USERUPDATE: prefixRouteV1("user/update"),
  CHANGEPASS: prefixRouteV1("user/change-password"),
};

export default apiRouter;
