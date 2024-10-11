import React, { useState } from 'react';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import axios from 'axios';  // Import axios for making HTTP requests

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isCompany, setIsCompany] = useState(false);  // State to track whether it's company registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setMessage('');  // Reset message on form toggle
    setErrors({});  // Reset errors on form toggle
  };

  const toggleRegistrationType = () => {
    setIsCompany(!isCompany);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isLogin) {
      // For registration
      const data = {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
        role: isCompany ? 2 : 1,  // Assign 2 for Company, 1 for Employee
      };

      try {
        const response = await axios.post('http://localhost:8000/api/register', data);
        setMessage(response.data.msg);  // Set success message
        setErrors({});
      } catch (error) {
        if (error.response && error.response.data) {
          setErrors(error.response.data);
        } else {
          console.error('Registration failed', error);
        }
      }
    } else {
      // For login, you can handle login API here
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-violet-50">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <button
            onClick={toggleRegistrationType}
            className={`w-1/2 py-2 rounded-l-lg ${!isCompany ? 'bg-violet-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Employee
          </button>
          <button
            onClick={toggleRegistrationType}
            className={`w-1/2 py-2 rounded-r-lg ${isCompany ? 'bg-violet-600 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            Company
          </button>
        </div>
        <h2 className="text-2xl font-bold text-center text-violet-700 mb-6">
          {isLogin ? 'Login' : (isCompany ? 'Company Registration' : 'Employee Registration')}
        </h2>
        {message && <p className="text-green-600 text-center mb-4">{message}</p>}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-violet-500"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-600">{errors.name}</p>}
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-violet-500"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-600">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-violet-500"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-600">{errors.password}</p>}
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700">Confirm Password</label>
              <input
                type="password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-violet-500"
                placeholder="Confirm your password"
              />
              {errors.password_confirmation && <p className="text-red-600">{errors.password_confirmation}</p>}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-700 focus:outline-none focus:bg-violet-700"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <div className="mt-6 text-center text-gray-600">
          or {isLogin ? 'login' : 'register'} with
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-red-500 text-white w-10 h-10 rounded-full flex justify-center items-center mx-2 hover:bg-red-600 focus:outline-none"
          >
            <FaGoogle />
          </button>
          <button
            className="bg-blue-600 text-white w-10 h-10 rounded-full flex justify-center items-center mx-2 hover:bg-blue-700 focus:outline-none"
          >
            <FaFacebookF />
          </button>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={toggleForm}
            className="text-violet-600 hover:underline focus:outline-none"
          >
            {isLogin ? 'Create an account' : 'Already have an account? Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
