import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CompanyProfile = () => {
  const [company, setCompany] = useState(null);

  useEffect(() => {
    // Assuming company ID is stored in localStorage or retrieved from context
    const fetchCompanyProfile = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/company-profile');
        setCompany(response.data.companyProfile);
      } catch (error) {
        console.error('Error fetching company profile:', error);
      }
    };

    fetchCompanyProfile();
  }, []);

  if (!company) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Company Profile</h1>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Company Name:</label>
        <div className="text-gray-900">{company.name}</div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
        <div className="text-gray-900">{company.description}</div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
        <div className="text-gray-900">{company.address}</div>
      </div>

      <div className="flex space-x-4">
        <button
          className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => alert('Logout functionality coming soon!')}
        >
          Logout
        </button>
        
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => alert('Edit Company Profile functionality coming soon!')}
        >
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default CompanyProfile;
