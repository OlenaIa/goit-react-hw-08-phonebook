import { AppBar, Toolbar } from "@mui/material";
import { AuthNav } from "components/Navigation/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelector";

export const MyAppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
      <AppBar>
      <Toolbar sx={{display: 'flex', fontSize: 18, justifyContent: 'space-between'}}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};