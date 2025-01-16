import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigator from './navBarComponents/navigator';
import LogoContainer from './navBarComponents/logoContainer';
import Profile from './navBarComponents/profile';

const NavBar = () => {
  return (
    <nav className="bg-gray-900 border-b border-gray-700">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" relative flex items-center justify-between h-16">
          <LogoContainer />
          <div className="flex ml-auto space-x-6 ">
            <Navigator linkto="/home">Home</Navigator>
            <Navigator linkto="/dashboard">Dashboard</Navigator>
            <Navigator linkto="/stocks">Stock Details</Navigator>
          </div>
          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
