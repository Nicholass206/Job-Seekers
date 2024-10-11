import React from 'react';
import companies from '../companies.json'; // Assuming you have a JSON file with company data
import Company from './Company'; // Import the Company component

const CompanyListing = ({ isHome = false }) => {
  const companyListings = isHome ? companies.slice(0, 3) : companies;
  
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {companyListings.map((company) => (
              <Company key={company.id} company={company} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CompanyListing;
