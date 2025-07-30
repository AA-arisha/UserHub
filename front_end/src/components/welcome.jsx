import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="bg-white p-10 rounded-2xl shadow-md text-center max-w-md w-full">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">SignUp/Register</h1>
      <p className="text-gray-600 mb-8">Please login or register to continue</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <>
          <Link
            to="/login"
            className="bg-pink-300 hover:bg-pink-400 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-blue-300 hover:bg-blue-400 text-white font-semibold py-2 px-6 rounded-lg transition"
          >
            Register
          </Link>
        </>
      </div>
    </div>
  );
}

export default Welcome;
