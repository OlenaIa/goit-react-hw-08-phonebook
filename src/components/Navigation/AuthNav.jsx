import { Toolbar } from "@mui/material";
import { StyledNavLink, toolbarStyle } from "components/Navigation/StyleNav";

export const AuthNav = () => {
  return (
    <Toolbar sx={toolbarStyle}>
      <StyledNavLink to="/register">
        Registration
      </StyledNavLink>
        <StyledNavLink to="/login">Sign In</StyledNavLink>
    </Toolbar>
  );
};