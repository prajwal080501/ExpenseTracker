import { Link } from "react-router-dom";
import Logo from "./Logo";

function Header() {
    return (
        <div className="z-10 sticky top-0 justify-between bg-white w-full flex items-center h-fit p-4">
            <div>
                <Logo brand={'Expensify'}/>
            </div>
            <div>
                <Link className="bg-emerald-500 text-white font-bold text-lg hover:bg-teal-600 duration-200 px-3 py-2 rounded-lg hover:scale-105" to="/auth">Login</Link>
            </div>
        </div>
    )
}
export default Header;