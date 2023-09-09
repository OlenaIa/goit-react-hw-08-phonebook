import { Toolbar } from "@mui/material";
import { StyledNavLink } from "components/Layout/Layout.styled";

export const AuthNav = () => {
  return (
    <Toolbar sx={{display: 'flex', columnGap: 3,}}>
      <StyledNavLink to="/register">
        Registration
      </StyledNavLink>
        <StyledNavLink to="/login">Sign In</StyledNavLink>
    </Toolbar>
  );
};