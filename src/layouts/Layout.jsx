import { useLocation } from "react-router-dom";
import Header from "../components/Header";

const Layout = ({ children }) => {
    const excludedPaths = ['/auth', '/login', '/signup'];
    const location = useLocation();
    const showNavbar = !excludedPaths.includes(location.pathname);

    return (
        <div className="">
            {showNavbar && <Header />}
            {children}
        </div>
    )
}

export default Layout;