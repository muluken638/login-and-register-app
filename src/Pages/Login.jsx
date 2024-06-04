import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="flex items-center justify-center h-screen select-none">
      <div className="p-4 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form className="py-3 gap-y-3">
          <div className="mb-2">
            <input
              type="email"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
              required
              placeholder="Enter Email"
            />
          </div>

          <div className="mb-2">
            <input
              type="password"
              className="form-input w-full px-4 py-2 border rounded-lg text-gray-700"
              required
              placeholder="Enter Password"
            />
          </div>

          <div className="mb-4">
            <button
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none"
              type="submit"
            >
              Login
            </button>
          </div>

          <div className="flex flex-row p-2">
            <div>
              <span className="line pr-5 text-blue-600">Don't have an account?</span>
            </div>
            <div className="text-gray-600 font-semibold text-lg cursor-pointer hover:text-blue-500">
              <Link to="/Register">Register</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;