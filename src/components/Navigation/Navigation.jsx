import { Toolbar } from "@mui/material";
import { StyledNavLink } from "components/Layout/Layout.styled";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelector";

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Toolbar sx={{display: 'flex', columnGap: 3,}}>
        <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </Toolbar>
  );
};