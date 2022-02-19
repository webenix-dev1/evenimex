const prefixRouteV1 = (route) => {
  return `v1/player/${route}`;
};

const commanRoute = (route) => {
  return `v1/${route}`;
};

const apiRouter = {
  CREATEPASS: commanRoute("player-change-password"),
  SPORT_LIST: commanRoute("sport-details"),
  LEVEL_LIST: commanRoute("level-details"),
  TEAM_LIST: prefixRouteV1("team-list"),
  GROUP_LIST: commanRoute("group-details"),
  PLAYER_LIST: prefixRouteV1("all-player-details"),
  SIGNUP: prefixRouteV1("register"),
  FORGOTPASS: prefixRouteV1("reset-password"),
  CHANGEPASS: prefixRouteV1("change-password"),
  ASSIGN_DRILL_LIST: prefixRouteV1("assign-drill-list"),
  ASSIGN_COMPLETE_DRILL_LIST: prefixRouteV1("completed-assign-drills"),
  CREATE_PROFILE: prefixRouteV1("update-profile"),
  RESETPASS: prefixRouteV1("auth/reset-password"),
  LOGIN: prefixRouteV1("register"),
  SOCIALLOGIN: prefixRouteV1("auth/social-login"),
  REFRESHTOKEN: prefixRouteV1("user/refresh-token"),
  USER: prefixRouteV1("player-details"),
  POSITION: prefixRouteV1("position-list"),
  ADDCARD: prefixRouteV1("store-card"),
  CARD_LIST: prefixRouteV1("card-list"),
  DELETE_CARD: prefixRouteV1("card/"),
  DEFAULT_CARD: prefixRouteV1("default-card"),
  DRILL_LIST: prefixRouteV1("drill-list-details"),
  YOUR_TURN: prefixRouteV1("your-turn"),
  THEIR_TURN: prefixRouteV1("their-turn"),
  DRILLS_DRILLLIST: prefixRouteV1("drill-list-drills"),
  DRILLS_VIDEOS: prefixRouteV1("drill-videos"),
  DRILLS_VIDEO_ANSWER: prefixRouteV1("drill-video-answer"),
  CHALLENGE_DRILL_VIDEO: prefixRouteV1("challenge-drills-video"),
  CHALLENGE_DRILLS: prefixRouteV1("challenge-drills"),
  CHALLENGE_DRILL_VIDEO_ANSWER: prefixRouteV1("challenge-answer-store"),
  CHALLENGE_PLAYER_RESULT_BOARD: prefixRouteV1("results"),
  CHALLENGE_STORE: prefixRouteV1("challenge-store"),
  CHALLENGE_RESULT_USER_LIST: prefixRouteV1("results-users"),
  CHALLENGE_PLAYER_LEADER_BOARD: prefixRouteV1("leader-board"),
  CHALLENGE_DRILL_LIST: prefixRouteV1("challenge-drill-list-details"),
  CHALLENGE_INVITE_FRIENDS: prefixRouteV1("parent-invite-challenge-store"),
  CHALLENGE_INVITE_FRIENDS_STORE: prefixRouteV1("invite-challenge-store"),
};

export default apiRouter;
