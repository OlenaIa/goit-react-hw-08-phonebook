import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { getCurrentUserThunk } from "services/fetchAuth";
import { selectCurrentUser } from "redux/auth/authSelector";
import { RestrictedRoute } from "components/RestrictedRouter";
import { PrivateRoute } from "components/PrivateRoute";
import { IsCurrentUserLoader } from "components/Loader/Loader";

const HomePage = lazy(() => import("pages/HomePage"));
const SignIn = lazy(() => import("pages/SignIn"));
const SignUp = lazy(() => import("pages/SignUp"));
const ContactsPage = lazy(() => import("pages/Contacts"));

export const App = () => {
  const dispatch = useDispatch();
  const isCurrentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUserThunk())
  }, [dispatch]);

  return isCurrentUser ?
    <IsCurrentUserLoader/> :
    (<>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<SignUp />} />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<SignIn />} />} />
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
          <Route path="*" element={<PrivateRoute redirectTo="/login" component={<HomePage />} />} />
        </Route>
      </Routes>
    </>
  )
};