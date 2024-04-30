import React, { useState } from 'react';
import { useFormData } from '../context/ContextProvider';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {addLogin} = useFormData();

  const add = (e) => {
    e.preventDefault();

    if (!username) return<div className='text-4xl text-slate-800 bg-red-500'>Good</div>;
    addLogin({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={add} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-gray-700">Username:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 transition duration-300"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 transition duration-300"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

