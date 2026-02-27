import { Image as ImageIcon, Leaf, Search, Sparkles } from 'lucide-react';
import { useState } from 'react';

const EcoLab = () => {
  // Added darkMode and limitAI to the state
  const [toggles, setToggles] = useState({ 
    stopAutoplay: false, 
    blurImages: false, 
    grayscale: false,
    darkMode: false,
    limitAI: false 
  });
  
  // Bumped base emissions up because we are simulating heavy AI and video use!
  const baseEmission = 45.0;

  const calculateSavings = () => {
    let savings = 0;
    if (toggles.limitAI) savings += 0.40;      // AI is heavy! Huge savings for turning it off.
    if (toggles.stopAutoplay) savings += 0.25;
    if (toggles.blurImages) savings += 0.15;
    if (toggles.darkMode) savings += 0.10;     // OLED dark mode saves power.
    if (toggles.grayscale) savings += 0.05;
    return savings;
  };

  const currentEmission = baseEmission * (1 - calculateSavings());

  const handleToggle = (key) => setToggles((prev) => ({ ...prev, [key]: !prev[key] }));

  const toggleLabels = {
    limitAI: 'Limit AI Usage',
    stopAutoplay: 'Stop Autoplay',
    blurImages: 'Blur Media',
    darkMode: 'Dark Mode',
    grayscale: 'Grayscale Mode'
  };

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-white flex items-center gap-3 mb-8">
        <Leaf className="text-green-500" /> Eco-Simulator
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* LEFT COLUMN: The Visual Sandbox */}
        <div className={`border-2 border-dashed border-green-500 rounded-xl p-4 transition-all bg-gradient-to-br from-green-500 to-emerald-800 ${toggles.grayscale ? 'grayscale' : ''}`}>
          
          {/* Inner Sandbox Container - Responds to Dark Mode */}
          <div className={`rounded-lg p-6 h-[420px] transition-colors duration-300 ${toggles.darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <h2 className="text-2xl font-black mb-4">Tech News</h2>
            
            {/* NEW: AI Usage vs Standard Search Component */}
            <div className={`w-full p-3 rounded-lg mb-4 flex items-center justify-center gap-2 transition-all duration-500 ${toggles.limitAI ? (toggles.darkMode ? 'bg-gray-800 text-gray-400 border border-gray-700' : 'bg-gray-200 text-gray-600') : 'bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg shadow-purple-500/30'}`}>
              {toggles.limitAI ? (
                <><Search size={18} /> <span>Standard Web Search</span></>
              ) : (
                <><Sparkles size={18} /> <span className="font-bold"> Generating AI Video...</span></>
              )}
            </div>

            {/* Video Component */}
            <div className={`w-full h-32 rounded-lg flex items-center justify-center mb-4 text-white transition-colors ${toggles.darkMode ? 'bg-black' : 'bg-gray-800'}`}>
              {toggles.stopAutoplay ? "⏸ Video Paused" : "▶ Playing 4K Video"}
            </div>
            
            {/* Image Component */}
            <div className={`h-24 rounded-lg flex items-center justify-center transition-all ${toggles.darkMode ? 'bg-blue-900/50 text-blue-400' : 'bg-blue-200 text-blue-800'} ${toggles.blurImages ? 'blur-md' : ''}`}>
              <ImageIcon size={32} />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Control Panel */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-800 rounded-xl shadow-sm border border-green-500 p-6">
          <h2 className="text-xl font-bold mb-6">Control Panel</h2>
          <div className="space-y-4 mb-8">
            {Object.keys(toggleLabels).map((key) => (
              <label key={key} className={`flex items-center justify-between p-3 border rounded-lg cursor-point transition-colors hover:bg-gray-50 ${toggles[key] ? 'border-green-500 bg-green-50/30' : 'border-gray-800'}`}>
                <span className="font-semibold text-black">{toggleLabels[key]}</span>
                <input 
                  type="checkbox" 
                  checked={toggles[key]} 
                  onChange={() => handleToggle(key)} 
                  className="w-5 h-5 accent-green-500" 
                />
              </label>
            ))}
          </div>
          
          <div className="bg-gray-900 rounded-xl p-6 text-center shadow-inner">
            <p className="text-gray-400 text-sm uppercase tracking-wide font-semibold mb-1">Current Emission</p>
            <p className="text-5xl font-black text-green-400">
              {currentEmission.toFixed(1)} <span className="text-2xl font-medium text-gray-500">g</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoLab;