import React from 'react'
import {Link} from 'react-router-dom'
const LogoContainer=()=>{
    return (
        <div className="flex items-center ">
            <a href="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-10 w-10"
                alt="Logo"
              />
              <span className="text-xl ml-3 font-bold text-white">
                Portfolio Tracker
              </span>
            </a>
          </div>
    )
}
export default LogoContainer