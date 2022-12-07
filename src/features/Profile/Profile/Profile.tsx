import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "hooks/useAuth";

import profileImage from "assets/images/userProfile.png";

import {
  Container,
  ProfileTopper,
  EditingIcon,
  Avatar,
  Username,
  Email,
} from "./profileStyles";
import { Button } from "components/StyledComponents/button";

const ProfileScreen: React.FC = () => {
  const auth = useAuth();

  const navigate = useNavigate();

  const handleUpdating = () => {
    navigate("edit");
  };

  const handleLogout = () => {
    auth?.logout();
  };

  return (
    <>
      <Container>
        <ProfileTopper>
          <EditingIcon onClick={handleUpdating} />
        </ProfileTopper>
        <Avatar src={profileImage}></Avatar>
        <Username>{auth?.user?.username}</Username>
        <Email>{auth?.user?.email}</Email>
        <Button onClick={handleLogout}>Logout</Button>
      </Container>
      <Outlet />
    </>
  );
};

export default ProfileScreen;
