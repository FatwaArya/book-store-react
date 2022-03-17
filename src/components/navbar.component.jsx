import { Link } from "react-router-dom";
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import { useState } from "react";
import useDarkMode from "../hooks/useDarkMode.hook";
const Navbar = () => {
    const [colorTheme, setTheme] = useDarkMode();
    return (

        <nav className="bg-slate-200 border-black lg:mx-auto sm:mx-36 px-2 sm:px-4 py-1.5 sm:rounded dark:bg-gray-800 ">
            <div className="container flex flex-reverse justify-center items-center mx-auto">
                <div className="flex md:order-2">
                    <button data-collapse-toggle="mobile-menu-4" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" > <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg >
                    </button >
                </div >
                <div className="hidden justify-center items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-4" >
                    <ul className="flex flex-col mt-2 mb-2 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium" >
                        <li>
                            <Link className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/">Beranda</Link>
                        </li >
                        <li>
                            <Link to='/tentangsaya' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Tentang Saya</Link>

                        </li >
                        <li>
                            <Link to='/karya' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Karya</Link>

                        </li >
                        <li>
                            <Link to='/gallery' className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Gallery</Link>

                        </li >
                        <button type='button' onClick={() => setTheme(colorTheme)} className='inline-block bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 focus-visible:ring ring-blue-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-2 py-2'>{colorTheme === 'light' ? <BsMoonFill /> : <BsSunFill />}</button>
                    </ul >
                </div >
            </div >
        </nav >

    );
}
export default Navbar;