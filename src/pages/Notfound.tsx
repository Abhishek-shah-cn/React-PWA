import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <h1 className="text-6xl font-bold text-[#6117FF] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-[#6117FF] text-white rounded-md hover:bg-[#4B12CC] transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
