import { Container } from "./App.styled";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import ContactsPage from "pages/Contacts";
import RegisterForm from "pages/Registration";
import LoginForm from "pages/Login";
import Home from "pages/Home";

export const App = () => {

  return (
    <Container>
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