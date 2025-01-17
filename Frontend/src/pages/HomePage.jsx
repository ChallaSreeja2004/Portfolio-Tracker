import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
const Home = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwt_decode(token);
        setUserName(decoded.name || 'User'); // Extract the name from the token
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Hi, {userName}! 👋
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to Portfolio Tracker! Manage your investments and track your
          financial progress with ease.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          Features:
        </h2>
        <ul className="list-disc text-left pl-6 text-gray-700">
          <li>Track your stock and mutual fund portfolios in real time.</li>
          <li>Analyze your financial growth with intuitive charts.</li>
          <li>Set and monitor financial goals.</li>
          <li>Receive personalized insights to optimize your investments.</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
