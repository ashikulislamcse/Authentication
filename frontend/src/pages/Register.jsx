import React from "react";
import { Link } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <h1 className="text-2xl font-bold">Register</h1>
      <form className="flex flex-col gap-4 w-80 p-4 border rounded-lg shadow-md">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="p-2 border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="p-2 border rounded-md"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="p-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer"
        >
          Register
        </button>
        <p className="text-sm">
          Already have an account?
          <Link to="/login" className="text-blue-500 hover:underline">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
