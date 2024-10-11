import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Add search handling logic here (e.g., redirect to search results page with the query)
    console.log('Search submitted:', searchTerm);
  };

  return (
    <>
      <nav className="bg-indigo-700 dark:bg-gray-900 border-b border-indigo-500 dark:border-gray-700">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
                <img className="h-10 w-auto" src={logo} alt="React Jobs" />
                <span className="hidden md:block text-white text-2xl font-bold ml-2 dark:text-gray-200">
                  Job Seekers
                </span>
              </NavLink>

              <div className="md:ml-auto flex items-center space-x-2">
                <form onSubmit={handleSearchSubmit} className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="px-4 py-2 rounded-md text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  />
                  <button
                    type="submit"
                    className="ml-2 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                  >
                    Search
                  </button>
                </form>

                <div className="flex space-x-2">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                        : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/jobs"
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                        : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                    }
                  >
                    Jobs
                  </NavLink>
                  
                    
                  
                  <NavLink
                    to="/companies"
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                        : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                    }
                  >
                    Companies
                  </NavLink>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      isActive
                        ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                        : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                    }
                  >
                    Profile
                  </NavLink>
                  
                  
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive
                          ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                          : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                      }
                    >
                      Login
                    </NavLink>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
