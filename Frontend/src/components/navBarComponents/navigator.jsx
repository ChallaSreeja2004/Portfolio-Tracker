import React, { Children } from 'react';
import {Link} from 'react-router-dom'
const Navigator = ({linkto,children}) => {
  return (
    <Link
      to={linkto}
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-4 py-2 rounded-md text-lg font-medium"
    >
      {children}
    </Link>
  );
};
export default Navigator;
