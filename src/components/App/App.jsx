import { Container } from "./App.styled";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { getCurrentUserThunk } from "services/fetchAuth";
import { selectCurrentUser } from "redux/auth/authSelector";
import { RestrictedRoute } from "components/RestrictedRouter";
import { PrivateRoute } from "components/PrivateRoute";

const Home = lazy(() => import("pages/Home"));
const LoginForm = lazy(() => import("pages/Login"));
const RegisterForm = lazy(() => import("pages/Registration"));
const ContactsPage = lazy(() => import("pages/Contacts"));

export const App = () => {
  const dispatch = useDispatch();
  const isCurrentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUserThunk())
  }, [dispatch]);

  return isCurrentUser ?
    (<p>User updates</p>) :
    (<Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<RegisterForm />} />} />
          <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<LoginForm />} />} />
          <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />} />
          <Route path="*" element={<PrivateRoute redirectTo="/login" component={<Home />} />} />
        </Route>
      </Routes>
    </Container>
  )
};