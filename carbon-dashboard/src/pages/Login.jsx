import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bgImage from './bg4.jpg';

const Login = ({ setIsLoggedIn, switchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call/loading effect like your friend set up
    setTimeout(() => {
      setIsLoading(false);
      
      // 1. Extract the name from the email (vibin@example.com -> vibin)
      const extractedName = email.split('@')[0];
      
      // 2. Save it to storage so the app remembers them
      localStorage.setItem('carbonUser', extractedName);
      
      // 3. Update global state and teleport to the dashboard
      setIsLoggedIn(true);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="flex-1 w-full flex bg-zinc-950 bg-cover bg-center items-center justify-center px-4"
>
      <div className="w-full max-w-md rounded-3xl bg-zinc-950 p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Welcome Back</h1>
          <p className="text-sm text-gray-400 mt-2">Please sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full rounded-lg border border-gray-600 bg-gray-900 px-4 py-2 text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-white">
              Password
            </label>
            <div className="relative">
              <input
                type={show ? "text" : "password"}
                id="password"
                className="w-full rounded-lg border border-gray-600 bg-gray-900 px-4 py-2 text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-green-500"
              >
                {show ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <div className="mt-2 flex justify-end">
              <a href="#" className="text-sm text-green-500 hover:text-green-400 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-green-600 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-900"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Don't have an account?{' '}
            <button
            type="button"
            onClick={switchToSignup}
            className="font-semibold text-green-500 hover:text-green-400 focus:outline-none"
          >
            Sign up
          </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;