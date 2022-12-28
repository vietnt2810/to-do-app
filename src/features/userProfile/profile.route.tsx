import { RouteItem } from "types/types";

import { ConstantsPathsEnum } from "constants/constants.path";
import ProfileScreen from "./profile/Profile";
import ProfileUpdating from "./profileUpdating/ProfileUpdating";

export const PROFILE_ROUTES: RouteItem = {
  id: "rt1",
  path: ConstantsPathsEnum.PROFILE,
  element: <ProfileScreen />,
  nestedRoutes: [
    {
      id: "rt1-1",
      path: ConstantsPathsEnum.EDIT_PROFILE,
      element: <ProfileUpdating />,
    },
  ],
};
