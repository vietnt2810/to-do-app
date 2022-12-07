import stitches from "stiches";

import { NavLink } from "react-router-dom";

import { useAuth } from "hooks/useAuth";

const { styled } = stitches;

const Navbar = styled("nav", {
  display: "flex",
  width: "100%",
  marginBottom: "50px",
  fontSize: "1.25rem",
  backgroundColor: "$headerColor",
});

const NavItem = styled(NavLink, {
  display: "flex",
  height: "50px",
  padding: "0 20px",
  lineHeight: "50px",
  color: "#fff",
  textDecoration: "none",
  "&:hover": { backgroundColor: "$greyColor" },
});

const Header: React.FC = () => {
  const auth = useAuth();

  return (
    <Navbar>
      <NavItem to="">Home</NavItem>
      {auth?.accessToken ? (
        <>
          <NavItem to="profile">Profile</NavItem>
          <NavItem to="tasks">Tasks</NavItem>
        </>
      ) : (
        <NavItem to="login">Login</NavItem>
      )}
    </Navbar>
  );
};

export default Header;
