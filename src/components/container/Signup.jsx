import React from "react";

const SignUp = () => {
  return (
    <div className="bg-gray-900 text-black py-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-8">Create your Free Account</h2>
        <div className="space-y-4">
          <button className="bg-white text-black py-2 px-4 rounded-full w-full flex items-center justify-center">
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google logo"
              className="w-6 h-6 mr-2"
            />
            Sign up with Google
          </button>
          <button className="bg-white text-black py-2 px-4 rounded-full w-full flex items-center justify-center">
            <img
              src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png"
              alt="Apple logo"
              className="w-12 h-6 mr-3"
            />
            Sign up with Apple
          </button>
          <div className="space-y-4">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Your email"
            />

            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-500 placeholder-gray-500 text-black focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
          {/* <div className="flex items-center mt-4">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              required
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />

          </div> */}
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-full w-full mt-6">
            Create an account
          </button>
          {/* <p className="mt-4 text-center text-gray-400 text-sm">
            Already have an account?{' '}
            <a href="#" className="text-indigo-400 underline">
              Sign in here
            </a>
            .
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
