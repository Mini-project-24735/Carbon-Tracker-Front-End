import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf,LogOut } from 'lucide-react';

const Navbar = ({ isLoggedIn, setIsLoggedIn, openLogin, openSignup }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('carbonUser');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="relative z-50 flex justify-between items-center p-6 w-full max-w-7xl mx-auto ">
      
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-2">
        <Leaf className="text-green-500 w-8 h-8" />
        <span className="text-2xl font-black tracking-tight text-white">CarbonTracker</span>
      </Link>

      <div className="flex items-center gap-8 font-semibold text-sm uppercase tracking-wider text-gray-300">
        
        {/* --- SCENARIO 1: LOGGED OUT NAVBAR --- */}
        {!isLoggedIn && (
          <>
            <Link to="/about" className="hover:text-green-400 transition-colors">About</Link>
            <button onClick={openLogin} className="hover:text-green-400 transition-colors">Login</button>
            <button 
              onClick={openSignup} 
              className="bg-green-500 hover:bg-green-400 text-black px-6 py-2 rounded-full transition-all transform hover:scale-105"
            >
              Sign Up
            </button>
          </>
        )}

        {/* --- SCENARIO 2: LOGGED IN NAVBAR --- */}
        {isLoggedIn && (
          <>
            <Link to="/" className="hover:text-green-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-green-400 transition-colors">About</Link>
            <Link to="/eco-lab" className="hover:text-green-400 transition-colors">Eco-Simulator</Link>
            <button onClick={handleLogout} className="flex item-center gap-2 text-red-400 hover:text-red-300 transition-colors"><LogOut size={18}/>Log Out</button>
          </>
        )}

      </div>
    </nav>
  );
};

export default Navbar;