import { Outlet } from "react-router-dom"
import { Suspense } from "react"; 
import Footer from "components/Footer/Footer";
import { MyAppBar } from "components/MyAppBar/MyAppBar";
    
export const Layout = () => {
    return <>
        <header>
            <MyAppBar />
        </header>
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </main>
        <footer><Footer /></footer>
    </>
};