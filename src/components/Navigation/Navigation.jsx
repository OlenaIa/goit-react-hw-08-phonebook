import { Toolbar } from "@mui/material";
import { StyledNavLink, toolbarStyle } from "components/Navigation/StyleNav";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelector";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Toolbar sx={toolbarStyle}>
        <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </Toolbar>
  );
};