import { useState } from "react";
import Input from "./common/Input";
import Popup from "./common/Popup"
import LogoIcon from "../assets/logo.png";
const Auth = ({ }) => {
    let enumMode = {
        login: 'login',
        register: 'register'
    }
    const [mode, setMode] = useState(enumMode.login);

    const handleMode = () => {
        if (mode === enumMode.login) {
            setMode(enumMode.register);
        } else {
            setMode(enumMode.login);
        }
    }
    let title = mode === enumMode.login ? "Login" : "Register";
    return (
        <Popup data={
            {
                title: title,
                icon: LogoIcon,
            }
        }>
            <form className="w-1/2 flex flex-col space-y-4 mx-auto h-full ">
                <div className="flex flex-col space-y-4">
                    <Input label="Email" name="email" placeholder="Enter your email" />
                    <Input label="Password" name="password" placeholder="Enter your password" />
                </div>
                <div>
                    <button className="w-full bg-sky-500 duration-200 active:scale-95 hover:scale-105 text-white text-xl font-bold hover:bg-sky-600 p-3 rounded-xl mt-5">
                        {title}
                    </button>
                </div>
                <div>
                    <p className="text-center">Don't have an account? <span onClick={() => handleMode()} className="text-sky-500 cursor-pointer">Register</span></p>
                </div>
            </form>
        </Popup>
    )
}

export default Auth;