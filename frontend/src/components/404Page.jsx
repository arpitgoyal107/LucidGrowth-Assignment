import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <ScrollToTop />
      <div className="text-center">
        <h1 className="section-heading font-number">404</h1>
        <p className="text-xl">
          Sorry, the page you are looking for does not exist...
        </p>
        <Link
          to="/"
          className="btn bg-slate-500 px-8 text-xl font-semibold text-white rounded-md mt-4"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
