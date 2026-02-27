import { useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { X } from 'lucide-react'; // Close button icon
import Navbar from './components/Navbar';
import About from './pages/About';
import EcoLab from './pages/EcoLab';
import Home from './pages/Home';
import Login from './pages/Login';
import Report from './pages/Report';
import SignUp from './pages/signUp';
import LandingPage from './pages/LandingPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('carbonUser'));
  
  // NEW: State to control which popup is open ('login', 'signup', or null)
  const [authModal, setAuthModal] = useState(null); 

  const ProtectedRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/" replace />;
  };

  return (
    <Router>
      <div className="min-h-screen w-full relative bg-black text-white">
        
        {/* Pass the popup triggers to the Navbar */}
        <Navbar 
          isLoggedIn={isLoggedIn} 
          setIsLoggedIn={setIsLoggedIn}
          openLogin={() => setAuthModal('login')}
          openSignup={() => setAuthModal('signup')}
        />

        <div className="flex-1 flex flex-col w-full">
          <Routes>
            {/* If logged in, go to Home. If logged out, show LandingPage */}
            <Route path="/" element={isLoggedIn ? <Home /> : <LandingPage switchToSignup={() => setAuthModal('signup')} switchToLogin={() => setAuthModal('login')}/>} />
            
            {/* About is accessible to everyone, no ProtectedRoute needed */}
            <Route path="/about" element={<About />} />
            
            {/* Protected Routes */}
            <Route path="/eco-lab" element={<ProtectedRoute><EcoLab /></ProtectedRoute>} />
            <Route path="/report" element={<ProtectedRoute><Report /></ProtectedRoute>} />
          </Routes>
        </div>

        {/* --- THE POPUP OVERLAY (Blurred Background) --- */}
        {authModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md">
            
            {/* The Popup Box */}
            <div className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl p-6 m-4 animate-in fade-in zoom-in-95 duration-200">
              
              {/* Close Button (X) */}
              <button 
                onClick={() => setAuthModal(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              {/* Show Login OR Signup based on state */}
              {authModal === 'login' && (
                <Login 
                  setIsLoggedIn={(val) => {
                    setIsLoggedIn(val);
                    setAuthModal(null); // Close popup on successful login
                  }} 
                  switchToSignup={() => setAuthModal('signup')}
                />
              )}
              {authModal === 'signup' && (
                <SignUp switchToLogin={() => setAuthModal('login')} />
              )}
            </div>
            
          </div>
        )}

      </div>
    </Router>
  );
};

export default App;