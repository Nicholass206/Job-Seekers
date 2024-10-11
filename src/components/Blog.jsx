import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const Blog = ({ blog }) => {
  const [showFullContent, setShowFullContent] = useState(false);
  const [likes, setLikes] = useState(blog.likes || 0);
  const [dislikes, setDislikes] = useState(blog.dislikes || 0);
  const [userReaction, setUserReaction] = useState(null); // 'like', 'dislike', or null

  let content = blog.content;
  if (!showFullContent) {
    content = content.substring(0, 90) + '...';
  }

  const handleLike = () => {
    if (userReaction === 'like') {
      setLikes(likes - 1);
      setUserReaction(null);
    } else {
      if (userReaction === 'dislike') setDislikes(dislikes - 1);
      setLikes(likes + 1);
      setUserReaction('like');
    }
  };

  const handleDislike = () => {
    if (userReaction === 'dislike') {
      setDislikes(dislikes - 1);
      setUserReaction(null);
    } else {
      if (userReaction === 'like') setLikes(likes - 1);
      setDislikes(dislikes + 1);
      setUserReaction('dislike');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{blog.title}</h3>
          <div className="text-gray-600 dark:text-gray-400 my-2">By {blog.author}</div>
        </div>

        <div className="mb-5 text-gray-800 dark:text-gray-300">{content}</div>

        <div className="border border-gray-100 dark:border-gray-700 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
          <div className="text-gray-700 dark:text-gray-400 mb-3">
            Published on: {new Date(blog.publishedDate).toLocaleDateString()}
          </div>
          <div className="flex space-x-4 mb-3 lg:mb-0">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 ${userReaction === 'like' ? 'text-indigo-500' : 'text-gray-600 dark:text-gray-400'}`}
            >
              <FaThumbsUp />
              <span>{likes}</span>
            </button>
            <button
              onClick={handleDislike}
              className={`flex items-center space-x-2 ${userReaction === 'dislike' ? 'text-indigo-500' : 'text-gray-600 dark:text-gray-400'}`}
            >
              <FaThumbsDown />
              <span>{dislikes}</span>
            </button>
          </div>
          <NavLink
            to={`/blogs/&{blog.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Blog;
