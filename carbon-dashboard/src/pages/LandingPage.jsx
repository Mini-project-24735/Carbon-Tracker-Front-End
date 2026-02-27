import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ArrowRight, Activity, BarChart3, MonitorSmartphone } from 'lucide-react';

const LandingPage = ({switchToSignup,switchToLogin}) => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans relative">
      


      {/* DESIGN SECTION */}
      <div className="lex flex-col lg:flex-row min-h-[85vh] pt-5 max-w-7xl mx-auto px-6 z-10 relative">
        <div className="lg:w-1/2 z-20 mb-16 lg:mb-0">
          <h1 className="text-6xl lg:text-8xl font-extrabold leading-tight mb-6">
            Let's make your <span className="text-green-500">digital footprint</span> invisible.
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-lg leading-relaxed">
            Track your web emissions, understand your impact, and get actionable insights to build a greener future—one click at a time.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={switchToLogin}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black text-lg font-bold px-8 py-4 rounded-full transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
            >
              Get Started Now <ArrowRight />
            </button>
            <Link 
              to="/about"
              className="flex items-center gap-2 border-2 border-gray-700 hover:border-green-500 text-white text-lg font-bold px-8 py-4 rounded-full transition-all hover:bg-gray-900"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Side Background Graphics */}
        <div className="lg:w-1/2 fixed top-0 right-0 bottom-0 h-full w-full lg:w-[63%] z-0 pointer-events-none ">
            <div className="hidden lg:block h-full w-full bg-gradient-to-br from-green-900 via-black to-black opacity-60" style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)' }}></div>
            <div className="absolute top-1/4 right-1/4 w-80 h-96 bg-green-500/20 rounded-full blur-3xl filter mix-blend-overlay"></div>
        </div>
      </div>

      {/* SCROLL DOWN: FEATURES SECTION */}
      <div className="bg-black py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">How it works</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our system silently calculates the environmental cost of your browsing habits without invading your privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            <div className="bg-zinc-950 border border-zinc-700 p-8 rounded-3xl hover:border-green-500/50 transition-colors group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-700 rounded-2xl flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform shadow-lg shadow-green-500/20">
                <Activity className="text-black w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Background Tracking</h3>
              <p className="text-gray-400 leading-relaxed">
                Our lightweight browser extension logs your screen time and domain usage locally, converting data transfer into real-world CO₂ emission metrics.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-700 p-8 rounded-3xl hover:border-green-500/50 transition-colors group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform shadow-lg shadow-blue-500/20">
                <MonitorSmartphone className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Eco-Simulator</h3>
              <p className="text-gray-400 leading-relaxed">
                Use our interactive sandbox to see how simple habit changes—like lowering video quality or limiting heavy AI generation—drastically reduce your footprint.
              </p>
            </div>

            <div className="bg-zinc-950 border border-zinc-700 p-8 rounded-3xl hover:border-green-500/50 transition-colors group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-700 rounded-2xl flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform shadow-lg shadow-purple-500/20">
                <BarChart3 className="text-white w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Detailed Analytics</h3>
              <p className="text-gray-400 leading-relaxed">
                Generate comprehensive weekly reports. View your top-emitting websites and track your progress as you build more sustainable digital routines.
              </p>
            </div>

          </div>
        </div>
      </div>

      <div className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-green-500/10 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-black mb-6">Ready to take control?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Join the movement towards a sustainable web. Start tracking your emissions for free today.
          </p>
          <button
            type="button"
            onClick={switchToSignup}
            className="inline-block bg-green-500 hover:bg-green-400 text-black text-xl font-bold px-10 py-5 rounded-full transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
          >
            Create Your Account
          </button>
        </div>
      </div>

    </div>
  );
};

export default LandingPage;