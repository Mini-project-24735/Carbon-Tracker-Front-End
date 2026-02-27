import { useState, useEffect } from 'react';
import { ArrowRight, Car, Clock, CloudLightning, TreePine, Smartphone, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EmissionsChart from '../components/Dashboard/EmissionsChart';

const Home = () => {
  const username = localStorage.getItem('carbonUser') || 'User';
  const navigate = useNavigate();

  // Dynamic Greeting State
  const [greeting, setGreeting] = useState('');
  
  // Interactive Equivalents Toggle State
  const [equivIndex, setEquivIndex] = useState(0);

  // Set greeting based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  // Data array for the interactive 3rd card
  const equivalents = [
    { 
      icon: <Car size={24} />, 
      title: "Car Equivalent", value: "3.2 km", desc: "Distance driven in a gas car",
      accent: "text-green-500", borderHover: "hover:border-green-500/50", glowHover: "hover:shadow-[0_0_30px_rgba(34,197,94,0.15)]", bgGlow: "bg-green-500/10"
    },
    { 
      icon: <TreePine size={24} />, 
      title: "Tree Equivalent", value: "0.02 Trees", desc: "Needed to absorb emissions",
      accent: "text-emerald-500", borderHover: "hover:border-emerald-500/50", glowHover: "hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]", bgGlow: "bg-emerald-500/10"
    },
    { 
      icon: <Smartphone size={24} />, 
      title: "Phone Equivalent", value: "48 Charges", desc: "Smartphone battery cycles",
      accent: "text-purple-500", borderHover: "hover:border-purple-500/50", glowHover: "hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]", bgGlow: "bg-purple-500/10"
    }
  ];

  const currentEquiv = equivalents[equivIndex];

  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-8 relative overflow-hidden">
      
      {/* --- AMBIENT BACKGROUND GLOW --- */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 relative z-10">
        <div className="flex flex-col">
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-gray-300 text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Live Tracking Active
          </div>
          
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            {greeting}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">{username}</span>
          </h1>
          <p className="text-lg text-gray-400 mt-2 max-w-xl">Here is your digital carbon footprint summary. Small changes make a massive impact.</p>
        </div>
        
        <div className="mt-4 md:mt-0">
          <button 
            onClick={() => navigate('/report')} 
            className="group flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
          >
            Detailed Report  
            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* --- STAT CARDS SECTION --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 relative z-10">
        
        {/* Card 1: Total CO2 */}
        <div className="bg-black border border-zinc-800 p-6 rounded-3xl relative overflow-hidden group transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] hover:-translate-y-1 cursor-default">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:bg-red-500/20 transition-colors duration-500"></div>
          <div className="p-3 rounded-2xl bg-zinc-900 text-red-500 w-fit mb-4 border border-zinc-800 group-hover:scale-110 transition-transform duration-300">
            <CloudLightning size={24} />
          </div>
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Total CO₂</p>
          <div className="flex items-end gap-2 mb-1">
            <h3 className="text-4xl font-black text-white">403</h3>
            <span className="text-xl text-gray-500 font-medium pb-1">g</span>
          </div>
          <p className="text-sm text-gray-500">Emitted this week</p>
        </div>
        
        {/* Card 2: Active Browsing */}
        <div className="bg-black border border-zinc-800 p-6 rounded-3xl relative overflow-hidden group transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1 cursor-default">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-500"></div>
          <div className="p-3 rounded-2xl bg-zinc-900 text-blue-500 w-fit mb-4 border border-zinc-800 group-hover:scale-110 transition-transform duration-300">
            <Clock size={24} />
          </div>
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">Active Browsing</p>
          <div className="flex items-end gap-2 mb-1">
            <h3 className="text-4xl font-black text-white">12<span className="text-2xl text-gray-400">h</span> 45<span className="text-2xl text-gray-400">m</span></h3>
          </div>
          <p className="text-sm text-gray-500">Screen time tracked this week</p>
        </div>

        {/* Card 3: Interactive Equivalents Toggle */}
        <div 
          onClick={() => setEquivIndex((prev) => (prev + 1) % equivalents.length)}
          className={`bg-black border border-zinc-800 p-6 rounded-3xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-1 cursor-pointer ${currentEquiv.borderHover} ${currentEquiv.glowHover}`}
        >
          {/* Subtle Tooltip hint */}
          <div className="absolute top-4 right-4 bg-zinc-800 text-[10px] text-gray-400 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest font-bold">
            Click to cycle
          </div>
          
          <div className={`absolute -right-10 -top-10 w-32 h-32 ${currentEquiv.bgGlow} rounded-full blur-3xl transition-colors duration-500`}></div>
          <div className={`p-3 rounded-2xl bg-zinc-900 ${currentEquiv.accent} w-fit mb-4 border border-zinc-800 group-hover:scale-110 transition-transform duration-300`}>
            {currentEquiv.icon}
          </div>
          <p className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-1">{currentEquiv.title}</p>
          <div className="flex items-end gap-2 mb-1">
            <h3 className="text-4xl font-black text-white">{currentEquiv.value.split(' ')[0]}</h3>
            <span className="text-xl text-gray-500 font-medium pb-1">{currentEquiv.value.split(' ')[1]}</span>
          </div>
          <p className="text-sm text-gray-500">{currentEquiv.desc}</p>
        </div>

      </div>

      {/* --- CHART SECTION --- */}
      <div className="bg-black border border-zinc-800 p-6 lg:p-8 rounded-3xl shadow-2xl relative z-10 transition-colors hover:border-zinc-700">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b border-zinc-800/50 pb-6">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Activity className="text-green-500" size={24} /> Weekly Emissions Trend
            </h2>
            <p className="text-sm text-gray-400 mt-1">Your daily carbon output over the last 7 days.</p>
          </div>
        </div>
        
        <div className="relative">
          <EmissionsChart />
        </div>
      </div>

    </div>
  );
};

export default Home;