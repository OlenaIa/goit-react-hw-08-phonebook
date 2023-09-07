import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentUser, selectIsLoggedIn } from "redux/auth/authSelector";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isCurrentUser = useSelector(selectCurrentUser);
    const shouldRedirect = !isLoggedIn && !isCurrentUser;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};