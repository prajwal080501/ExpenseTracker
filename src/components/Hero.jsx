import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { motion } from 'framer-motion';
import Circle from "./Circle";
const Hero = () => {
    return (
        <div className="sticky -top-20  w-full h-full">
            <div className="absolute flex items-center justify-center inset-0 bg-white -z-10 w-1/2 h-full mx-auto ">
                <Circle className="bg-red-200" />
                <Circle className="absolute top-10 right-10 mt-10 bg-gradient-to-r from-blue-200 to-fuchsia-200 opacity-20" />
            </div>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex w-full h-full justify-center items-center">
                <div className="w-fit h-fit">
                    <p className="text-7xl font-extrabold text-center text-gray-900">Your Personal</p>
                    <p className="font-extrabold text-5xl mt-5 text-center">
                        Expense <span className="text-sky-500">Manager</span>
                    </p>
                    <div className="mt-5 flex items-center flex-col space-y-5">
                        <p className="text-gray-700 text-xl w-1/2 p-2 leading-relaxed tracking-wider text-center">
                            Empower your financial journey with precision and clarity. Take control, track your expenses, and pave the way towards financial freedom
                        </p>
                        <Link to="/dashboard" className="bg-zinc-900 text-white p-3 rounded-lg hover:scale-105 duration-200 ease-linear active:scale-95">
                            Dashboard
                        </Link>
                        <div className="w-full h-fit flex items-center justify-center sticky bottom-0 p-2">
                            <MdKeyboardDoubleArrowDown className="w-12 animate-pulse h-12 text-black" />
                        </div>
                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default Hero;