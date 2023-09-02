import { Container } from "./App.styled";
import { Routes, Route } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import ContactsPage from "pages/Contacts";

export const App = () => {

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={"Home"} />
          <Route path="/register" element={"registration"} />
          <Route path="/login" element={"login"} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={"Home"} />
        </Route>
      </Routes>
    </Container>
  )
};