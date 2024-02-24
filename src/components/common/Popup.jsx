import React, { useContext } from 'react';
import { PopupContext } from '../../context/PopupContext';
import { IoIosCloseCircle } from "react-icons/io";
import {motion } from 'framer-motion';
const Popup = ({ data, children }) => {
    const { popupOpen, handlePopup } = useContext(PopupContext);
    return (
        <div className={`popup fixed top-0 z-30 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center ${popupOpen ? '' : 'hidden'}`}>
            {/* Modal container */}
            <div className="bg-gradient-to-br from-white via-slate-100 to-fuchsia-200 w-[40%] h-fit p-8 rounded-lg shadow-lg">
                {/* Modal header */}
                <div className="flex space-x-3 items-center">

                    <button onClick={handlePopup} className="text-gray-500 hover:text-gray-700">
                        {/* Close button */}
                        <IoIosCloseCircle className="text-4xl text-red-400" />
                    </button>
                </div>
                <div className='w-full flex  flex-col space-y-5 items-center p-5'>
                    <motion.img 
                    initial={{ scale: 0, opacity:0.6, y: -100 }}
                    whileInView={{ scale: 1, opacity:1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    src={data.icon} alt="logo" className="w-24 h-24" />
                    <h2 className="text-5xl p-4 mx-auto text-slate-900 font-extrabold">{data.title}</h2>
                </div>
                {/* Modal content */}
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Popup;
