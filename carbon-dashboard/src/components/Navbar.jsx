import { LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "./Dashboard/logo.png";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('carbonUser');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (

    <nav className={isLoggedIn ? "bg-gray-950 text-white p-4 shadow-lg" : "bg-transparent text-white p-4 absolute w-full z-10"}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 ">
          <img src={Logo} alt="" className='h-20 rounded-3xl' />
        </Link>

        {isLoggedIn && (
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-green-400 transition">Home</Link>
            <Link to="/eco-lab" className="hover:text-green-400 transition">Eco-Simulator</Link>
            <Link to="/about" className="hover:text-green-400 transition-colors">About</Link>
            <button onClick={handleLogout} className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition border-l border-gray-700 pl-4 ml-2">
              <LogOut size={18} /> Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;