export type BottomTabRouteParams = {
  Home: undefined;
  Search: undefined;
  Social: undefined;
  Profile: undefined;
};

export type RootStackParams = {
  Splash: undefined;
  BottomTabRoute: BottomTabRouteParams;
};

export type HomeTabRouteParams = {
  Browse: undefined;
  Challenge: { id: number };
  Watch: undefined;
};

export type SocialTabRouteParams = {
  Updates: undefined;
  Messages: undefined;
};

export type ProfileTabRouteParams = {
  Reward: { id: number };
};
