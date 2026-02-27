import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bgImage from './bg.png';
const SignUp = ({switchToLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [show, setShow] = useState(false);
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call/loading effect like your friend set up
    setTimeout(() => {
      setIsLoading(false);
      
      const Name = username;
      
      // 2. Save it to storage so the app remembers them
      localStorage.setItem('carbonUser', Name);
      
      if (switchToLogin) {
        switchToLogin(); 
      }
    }, 1500);
  };

  return (
    <div className="flex-1 w-full flex bg-zinc-950 items-center justify-center px-4"
    >
      <div className="w-full max-w-md rounded-3xl bg-zinc-950">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">Register</h1>
          <p className="text-sm text-gray-400 mt-2">Please provide the details</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="mb-2 block text-sm font-medium text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full rounded-lg border border-gray-600 bg-gray-900 px-4 py-2 text-white focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500/50"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <label htmlFor="email" className="mb-2 block text-sm py-2 font-medium text-white">
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
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-lg bg-green-600 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-900"
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{' '}
          <button
            type="button"
            onClick={switchToLogin}
            className="font-semibold text-green-500 hover:text-green-400 focus:outline-none"
          >
            login
          </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;