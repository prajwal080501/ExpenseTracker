import { Link } from "react-router-dom";
import LogoIcom from '../assets/logo.png';
function Logo({ brand }) {
    return (
        <div className="flex space-x-4 items-center justify-center">
            <img src={LogoIcom} alt="logo" className="w-8 h-8" />
            <Link className="text-2xl font-extrabold" to="/">{brand}</Link>
        </div>
    )
}

export default Logo;