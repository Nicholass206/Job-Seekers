import React from 'react';
import blogs from '../blogs.json';
import Blog from './Blog';

const BlogsListing = ({ isHome = false }) => {
  const blogListings = isHome ? blogs.slice(0, 3) : blogs;

  return (
    <>
      <section className="bg-blue-50 dark:bg-gray-900 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center dark:text-indigo-300">
            Latest Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogListings.map((blog) => (
              <Blog key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsListing;
