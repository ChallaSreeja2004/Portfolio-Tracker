import React, { useState, useEffect,useRef } from 'react';
const Profile = ({
  username = 'Username',
  email = 'user@gmail.com',
  userImage
}) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };
    if (isUserMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isUserMenuOpen]);
  return (
    <div className="flex items-center ml-auto md:order-2 space-x-3 rtl:space-x-reverse">
      <button
        type="button"
        className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
        onClick={toggleUserMenu}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="w-10 h-10 rounded-full "
          src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%22-0.5%20-0.5%2016%2016%22%20id%3D%22Circle-User--Streamline-Font-Awesome%22%20height%3D%2216%22%20width%3D%2216%22%3E%3Cdesc%3ECircle%20User%20Streamline%20Icon%3A%20https%3A%2F%2Fstreamlinehq.com%3C%2Fdesc%3E%3C!--!%20Font%20Awesome%20Free%206.5.2%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20(Icons%3A%20CC%20BY%204.0%2C%20Fonts%3A%20SIL%20OFL%201.1%2C%20Code%3A%20MIT%20License)%20Copyright%202024%20Fonticons%2C%20Inc.--%3E%3Cpath%20d%3D%22M11.689453125%2011.255859375c-0.6474609375%20-1.125%20-1.86328125%20-1.880859375%20-3.251953125%20-1.880859375h-1.875c-1.388671875%200%20-2.6044921875%200.755859375%20-3.251953125%201.880859375%201.03125%201.1484375%202.525390625%201.869140625%204.189453125%201.869140625s3.158203125%20-0.7236328125%204.189453125%20-1.869140625zM0%207.5a7.5%207.5%200%201%201%2015%200%207.5%207.5%200%201%201%20-15%200zm7.5%200.46875a2.109375%202.109375%200%201%200%200%20-4.21875%202.109375%202.109375%200%201%200%200%204.21875z%22%20fill%3D%22%23fefbff%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
          alt="user photo"
        />
      </button>
      {isUserMenuOpen && (
        <div ref={menuRef} className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute top-12 right-4">
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">
              {username}
            </span>
            <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
              {email}
            </span>
          </div>
          <ul className="py-2">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Profile;
