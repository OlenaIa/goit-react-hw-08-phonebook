import { Outlet } from "react-router-dom"
import { HeaderStyled, MainTitle, NavStyled, StyledNavLink } from "./Layout.styled";
import { Suspense } from "react"; 
import { Footer } from "pages/Footer";
import { AppBar } from "components/AppBar/AppBar";
    
export const Layout = () => {
    return <>
        <HeaderStyled>
            <AppBar />
        </HeaderStyled>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
        <footer><Footer /></footer>
    </>
};