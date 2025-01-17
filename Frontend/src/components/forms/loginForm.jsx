import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InputField from '../inputs/input';
import Button from '../button/button';
import Password from '../inputs/password';

const LoginForm = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleTextChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = { name, email, password };
    try {
      const response = await axios.post('/api/v1/user/login', userData);
      console.log(response.data);
      alert(response.data.message);
      if (response.data.token) {
        alert('Login successful!');
        localStorage.setItem('token', response.data.token); // Store token in localStorage
      } else {
        alert('No token found in the response.');
      }
    } catch (error) {
      alert(error.response.data.message);
    }
    alert(`Email: ${email}\nPassword: ${password}`);
    navigate('/home');
  };

  return (
    <div className=" max-w-sm mx-auto p-8 px-8 py-6 bg-white shadow-lg  rounded-lg mb-4 ">
      <h2 className="text-2xl font-bold text-center text-black mb-4">Login</h2>
      <div>
        <InputField
          placeholder="Username"
          value={name}
          onChange={handleTextChange}
          type="text"
        />
        <InputField
          placeholder="@gmail.com"
          value={email}
          onChange={handleEmailChange}
          type="email"
        />
        <Password
          placeholder="Enter your password..."
          value={password}
          onChange={handlePasswordChange}
        />
        <div className="flex justify-center items-center">
          <Button
            onClick={handleLogin}
            text=" Login"
            logoPosition="right"
            logo="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20id%3D%22Button-Circle-Right-1--Streamline-Nova%22%20height%3D%2224%22%20width%3D%2224%22%3E%3Cdesc%3EButton%20Circle%20Right%201%20Streamline%20Icon%3A%20https%3A%2F%2Fstreamlinehq.com%3C%2Fdesc%3E%3Cpath%20fill%3D%22%23ffffff%22%20fill-rule%3D%22evenodd%22%20d%3D%22M12%200C5.37258%200%200%205.37258%200%2012c0%206.6274%205.37258%2012%2012%2012%206.6274%200%2012%20-5.3726%2012%20-12%200%20-6.62742%20-5.3726%20-12%20-12%20-12Zm7%2012%20-6%20-5.80005v3.84695H5.03271v4H13V17.8l6%20-5.8Z%22%20clip-rule%3D%22evenodd%22%20stroke-width%3D%221%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E"
            className="bg-green-700 hover:bg-green-600 active:bg-green-700 text-white p-3 rounded-lg shadow-md  mb-1 "
          />
        </div>
      </div>
      <h3 className=" text-center px-3 text-black mt-1">
        Not registered ?{' '}
        <Link to="/register" className="text-blue-600 hover:text-red-500">
          {' '}
          Register
        </Link>
      </h3>
    </div>
  );
};

export default LoginForm;
