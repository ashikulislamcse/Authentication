import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <h1 className="text-2xl font-bold">Login</h1>
      <form className="flex flex-col gap-4 w-80 p-4 border rounded-lg shadow-md">
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="p-2 border rounded-md focus:ring focus:ring-blue-300"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 cursor-pointer disabled:bg-gray-400"
        >
          Login
        </button>
        <p className="text-sm">
          Don't have an account?
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
