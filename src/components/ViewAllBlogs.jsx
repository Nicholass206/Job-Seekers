import React from 'react'
import { NavLink } from 'react-router-dom'

const ViewAllBlogs = () => {
  return (
    <>
    <section className="m-auto max-w-lg my-10 px-6">
    <NavLink
      to='/blogs'
      className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Blogs
      </NavLink>
  </section>
  </>
  )
}

export default ViewAllBlogs