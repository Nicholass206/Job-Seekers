import React from 'react'
import { NavLink } from 'react-router-dom'

const ViewAllCompanies = () => {
  return (
    <>
    <section className="m-auto max-w-lg my-10 px-6">
    <NavLink
      to='/companies'
      className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Companies
      </NavLink>
  </section>
  </>
  )
}

export default ViewAllCompanies