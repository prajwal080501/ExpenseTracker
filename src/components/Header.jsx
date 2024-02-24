import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { PopupContext } from "../context/PopupContext";

function Header() {
    const { handlePopup } = useContext(PopupContext);
    return (
        <div className="z-20 sticky top-0 justify-between bg-transparent w-full flex items-center h-fit p-4">
            <div>
                <Logo brand={'Expensify'} />
            </div>
            <div>
                <button onClick={handlePopup} className="bg-emerald-500 text-white font-bold text-lg hover:bg-teal-600 duration-200 px-3 py-2 rounded-lg hover:scale-105">Login</button>
            </div>
        </div>
    )
}
export default Header;