import Header from "./components/Header"
import Auth from "./components/Auth";
import LandingPage from "./pages/LandingPage"
import { useState } from "react";

function App() {

  return (
    <body>
      <div className="w-full h-full">
        <Auth /> 
        <LandingPage />
      </div>
    </body>
  )
}

export default App
