/** @format */
import React from "react";

const BlogCard = ({ blog = []}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border hover:shadow-xl transition duration-300">
      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
          {blog.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          By <span className="font-semibold">{blog.author}</span> on{" "}
          {new Date(blog.date).toLocaleDateString()}
        </p>
        <p className="text-gray-600 mb-4">{blog.shortDesc}</p>
        <a
          href={blog.link}
          className="inline-block text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold transition"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

const BlogSection = ({ blogs =[]}) => {
  return (
    <div className="py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        My Blog
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.length ? (
          blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <p className="text-gray-500">No blog posts yet.</p>
        )}
      </div>
    </div>
  );
};

export default BlogSection;