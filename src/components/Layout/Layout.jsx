import { Outlet } from "react-router-dom"
import { HeaderStyled, MainTitle, NavStyled, StyledNavLink } from "./Layout.styled";
import { Suspense } from "react"; 
import { Footer } from "pages/Footer";
    
export const Layout = () => {
    return <>
        <HeaderStyled>
            <MainTitle>Phonebook</MainTitle>
            <NavStyled>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/register">Registration</StyledNavLink>
                <StyledNavLink to="/login">Log In</StyledNavLink>
                <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            </NavStyled>
        </HeaderStyled>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
        <footer><Footer /></footer>
    </>
};