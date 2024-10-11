import React from 'react'

const Profile = () => {
  return (
    <>
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Profile</h1>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
        <div className="text-gray-900">Nicola</div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        <div className="text-gray-900">nicolafadoul@gmail.com</div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Role:</label>
        <div className="text-gray-900">Job Seeker</div>
      </div>

      <div className="flex space-x-4">
        <button
          className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Logout
        </button>
        
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => alert('Edit Profile functionality coming soon!')}
        >
          Edit Profile
        </button>
      </div>
    </div>
    </>

  )
}

export default Profile