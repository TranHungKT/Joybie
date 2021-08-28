export type BottomTabRouteParams = {
  Home: undefined;
  Search: undefined;
  Social: undefined;
  Profile: undefined;
};

export type RootStackParams = {
  Splash: undefined;
  BottomTabRoute: BottomTabRouteParams;
  DetailScreen: { id: string };
};

export type HomeTabRouteParams = {
  Browse: undefined;
  Watch: undefined;
};

export type SocialTabRouteParams = {
  Updates: undefined;
  Messages: undefined;
};

export type ProfileTabRouteParams = {
  Reward: { id: number };
};
