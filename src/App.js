import React from "react";
import Main from "./Main";
import { Link } from "react-router-dom";
import Navbar from "./components/navbar.component";

function App() {

  return (
    <div className=" dark:bg-gray-800">
      <Navbar />
      <Main />
    </div>
  )
}
export default App;