import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/auth/authSelector";

export const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    console.log(isLoggedIn);

  return (
      <>
            <p>Phonebook</p>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};