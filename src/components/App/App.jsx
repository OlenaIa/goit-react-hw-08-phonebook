import { Container } from "./App.styled";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import ContactsPage from "pages/Contacts";
import RegisterForm from "pages/Registration";
import LoginForm from "pages/Login";
import Home from "pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentUserThunk } from "services/fetchAuth";
import { selectCurrentUser } from "redux/auth/authSelector";

export const App = () => {
  const dispatch = useDispatch();
  const isCurrentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUserThunk(), [dispatch])
  });

  return isCurrentUser ?
    (<p>User updates</p>) :
    (<Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Container>
  )
};