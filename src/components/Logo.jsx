import { Link } from "react-router-dom";

function Logo({brand }) {
    return (
        <Link className="text-2xl font-extrabold" to="/">{brand}</Link>
    )
}

export default Logo;