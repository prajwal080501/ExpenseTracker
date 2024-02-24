import { createContext, useState } from "react";

const PopupContext = createContext();

const PopupProvider = ({ children }) => { // <-- Added children prop
    const [popupOpen, setPopupOpen] = useState(false);

    function handlePopup() {
        console.log('Popup Opened');
        setPopupOpen(!popupOpen);
    }

    return (
        <PopupContext.Provider value={{
            popupOpen,
            handlePopup
        }}>
            {children}
        </PopupContext.Provider>
    );
}

export { PopupContext, PopupProvider };
