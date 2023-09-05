import { StyledNavLink } from "components/Layout/Layout.styled";

export const AuthNav = () => {
  return (
    <div>
        <StyledNavLink to="/register">Registration</StyledNavLink>
        <StyledNavLink to="/login">Log In</StyledNavLink>
    </div>
  );
};