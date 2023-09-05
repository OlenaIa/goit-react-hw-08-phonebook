import { NavStyled, StyledNavLink } from "components/Layout/Layout.styled";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelector";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavStyled>
        <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </NavStyled>
  );
};