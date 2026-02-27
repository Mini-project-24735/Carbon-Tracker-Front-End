import React, { useState, useEffect } from 'react';
import { Leaf, MonitorPlay, Cpu, Cloud, Car, TreePine, Zap, Lightbulb } from 'lucide-react';

const EcoLab = () => {
  // --- SIMULATOR STATE ---
  const [videoHours, setVideoHours] = useState(2);
  const [videoQuality, setVideoQuality] = useState('HD'); // SD, HD, 4K
  const [aiPrompts, setAiPrompts] = useState(10);
  const [cloudStorage, setCloudStorage] = useState(50); // in GB

  // --- LIVE RESULTS STATE ---
  const [dailyCarbon, setDailyCarbon] = useState(0);
  const [yearlyCarbon, setYearlyCarbon] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  // --- THE MATH (Estimations in grams of CO2) ---
  const emissionsRates = {
    video: { 'SD': 36, 'HD': 55, '4K': 100 }, // g per hour
    ai: 4.3, // g per prompt
    cloud: 0.002 // g per GB per day
  };

  // Recalculate whenever a slider changes
  useEffect(() => {
    // 1. Calculate Carbon
    const videoEmissions = videoHours * emissionsRates.video[videoQuality];
    const aiEmissions = aiPrompts * emissionsRates.ai;
    const cloudEmissions = cloudStorage * emissionsRates.cloud;

    const totalDaily = videoEmissions + aiEmissions + cloudEmissions;
    setDailyCarbon(totalDaily);
    setYearlyCarbon(totalDaily * 365);

    // 2. Generate Dynamic Suggestions
    const newSuggestions = [];

    if (videoQuality === '4K') {
      newSuggestions.push("Dropping your video quality from 4K to HD cuts those specific emissions by almost half. You likely won't notice the difference on a laptop screen!");
    }
    
    if (videoHours > 4) {
      newSuggestions.push("You have high daily watch time. Consider switching to audio-only (like podcasts or Spotify) for background noise instead of leaving videos running.");
    }

    if (aiPrompts > 30) {
      newSuggestions.push("AI generation is highly energy-intensive. Try batching your questions into fewer, more comprehensive prompts to reduce server load.");
    }

    if (cloudStorage > 500) {
      newSuggestions.push("Large cloud storage requires continuous server cooling. Doing a 'digital spring cleaning' to delete duplicate photos and old backups can lower this permanently.");
    }

    // If they are doing great, give positive reinforcement!
    if (newSuggestions.length === 0) {
      newSuggestions.push("Great job! Your current simulated habits represent a very sustainable digital footprint.");
    }

    setSuggestions(newSuggestions);

  }, [videoHours, videoQuality, aiPrompts, cloudStorage]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full text-white">
      
      {/* HEADER */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl font-black mb-3 flex items-center justify-center md:justify-start gap-3">
           The Eco-Simulator
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl">
          Tweak your daily digital habits below to see how small changes drastically impact your carbon footprint over time.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* --- LEFT COLUMN: THE CONTROLS --- */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Control 1: Video Streaming */}
          <div className="bg-black border border-zinc-800 p-6 rounded-3xl shadow-lg transition-colors hover:border-zinc-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-500/20 rounded-xl text-red-500"><MonitorPlay size={24} /></div>
              <h2 className="text-2xl font-bold">Video Streaming</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <label className="text-gray-400">Daily Watch Time</label>
                  <span className="text-green-400">{videoHours} Hours</span>
                </div>
                <input 
                  type="range" min="0" max="12" step="0.5" 
                  value={videoHours} onChange={(e) => setVideoHours(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer 
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-3 
                    [&::-webkit-slider-thumb]:h-3 
                    [&::-webkit-slider-thumb]:bg-white 
                    [&::-webkit-slider-thumb]:rounded-full"
                />
              </div>

              <div>
                <label className="text-gray-400 text-sm font-medium mb-3 block">Video Quality</label>
                <div className="flex gap-3">
                  {['SD', 'HD', '4K'].map(quality => (
                    <button
                      key={quality}
                      onClick={() => setVideoQuality(quality)}
                      className={`flex-1 py-3 rounded-xl font-bold transition-all ${
                        videoQuality === quality 
                          ? 'bg-green-500 text-black border-2 border-green-500' 
                          : 'bg-zinc-900 text-gray-400 border-2 border-zinc-800 hover:border-zinc-600'
                      }`}
                    >
                      {quality}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Control 2: AI Usage */}
          <div className="bg-black border border-zinc-800 p-6 rounded-3xl shadow-lg transition-colors hover:border-zinc-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/20 rounded-xl text-purple-500"><Cpu size={24} /></div>
              <h2 className="text-2xl font-bold">AI Generation</h2>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <label className="text-gray-400">Daily Prompts (ChatGPT, Midjourney, etc.)</label>
                <span className="text-purple-400">{aiPrompts} Prompts</span>
              </div>
              <input 
                type="range" min="0" max="100" step="1" 
                value={aiPrompts} onChange={(e) => setAiPrompts(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer 
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-3 
                    [&::-webkit-slider-thumb]:h-3 
                    [&::-webkit-slider-thumb]:bg-white 
                    [&::-webkit-slider-thumb]:rounded-full"
              />
              <p className="text-xs text-gray-600 mt-2">AI models require immense computational power per query.</p>
            </div>
          </div>

          {/* Control 3: Cloud Storage */}
          <div className="bg-black border border-zinc-800 p-6 rounded-3xl shadow-lg transition-colors hover:border-zinc-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-xl text-blue-500"><Cloud size={24} /></div>
              <h2 className="text-2xl font-bold">Cloud Storage</h2>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2 font-medium">
                <label className="text-gray-400">Data stored in Drive/Photos/iCloud</label>
                <span className="text-blue-400">{cloudStorage} GB</span>
              </div>
              <input 
                type="range" min="0" max="2000" step="50" 
                value={cloudStorage} onChange={(e) => setCloudStorage(Number(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer 
                    [&::-webkit-slider-thumb]:appearance-none 
                    [&::-webkit-slider-thumb]:w-3 
                    [&::-webkit-slider-thumb]:h-3 
                    [&::-webkit-slider-thumb]:bg-white 
                    [&::-webkit-slider-thumb]:rounded-full"
              />
            </div>
          </div>

        </div>

        {/* --- RIGHT COLUMN: THE LIVE RESULTS --- */}
        <div className="lg:col-span-5">
          <div className="sticky top-32 space-y-6">
            
            {/* Main Result Card */}
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
              
              <h3 className="text-gray-400 font-semibold mb-2 uppercase tracking-wider text-sm relative z-10">Your Simulated Footprint</h3>
              
              <div className="mb-8 relative z-10">
                <div className="flex items-end gap-2">
                  <span className="text-6xl font-black text-white">{Math.round(yearlyCarbon / 1000)}</span>
                  <span className="text-xl text-gray-500 font-medium mb-2">kg CO₂ / year</span>
                </div>
                <p className="text-green-500 font-medium mt-2 flex items-center gap-2">
                  <Leaf size={16} /> That's {Math.round(dailyCarbon)} grams per day
                </p>
              </div>

              {/* Real World Equivalents */}
              <div className="space-y-4 relative z-10 border-t border-zinc-800 pt-6">
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Real World Equivalent</h4>
                
                <div className="flex items-center gap-4 bg-black/50 p-4 rounded-2xl border border-zinc-800/50">
                  <div className="p-3 bg-zinc-900 rounded-xl"><Car className="text-gray-300" /></div>
                  <div>
                    <p className="font-bold text-white">{Math.round((yearlyCarbon / 1000) / 0.12)} km</p>
                    <p className="text-sm text-gray-400">Driven in a gas car</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-black/50 p-4 rounded-2xl border border-zinc-800/50">
                  <div className="p-3 bg-zinc-900 rounded-xl"><TreePine className="text-green-500" /></div>
                  <div>
                    <p className="font-bold text-white">{Math.max(1, Math.round((yearlyCarbon / 1000) / 21))} trees</p>
                    <p className="text-sm text-gray-400">Needed to absorb this yearly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* --- DYNAMIC ACTIONABLE INSIGHTS --- */}
            <div className="bg-zinc-950/80 border border-zinc-800 p-6 rounded-3xl">
              <h4 className="font-bold text-white mb-4 flex items-center gap-2 text-lg">
                <Lightbulb className="text-yellow-500" size={20} /> Actionable Insights
              </h4>
              <ul className="space-y-4">
                {suggestions.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <p className="text-gray-300 text-sm leading-relaxed">{tip}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default EcoLab;