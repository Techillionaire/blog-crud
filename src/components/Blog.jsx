import React from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import { Link } from "react-router-dom";

const Blog = ({ id, author, title, body, onDelete }) => {
  return (
      <article className=" border rounded p-5 bg-slate-100 mt-6">
        <div>
          <h2 className="font-bold text-slate-700 mb-2">{title}</h2>
          <p className="text-gray-500">{body}</p>
          <div className="flex items-center justify-between mt-2">
            <p>
              Author: <span className="font-bold text-slate-800">{author}</span>
            </p>
            <div className="flex">
              <div className="w-10 h-10 hover:bg-gray-200 rounded-full flex items-center justify-center hover:text-blue-600 cursor-pointer   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <Link to={`/update/${id}`}>
                  <CiEdit className="text-2xl" />
                </Link>
              </div>
              <div className="w-10 h-10 hover:bg-gray-200 rounded-full flex items-center justify-center hover:text-red-600 cursor-pointer   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
                <CiTrash className="text-2xl" onClick={onDelete} />
              </div>
            </div>
          </div>
        </div>
      </article>
  );
};

export default Blog;
