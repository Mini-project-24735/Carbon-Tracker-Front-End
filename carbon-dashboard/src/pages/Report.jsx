import { BarChart3, Calendar, Cpu, Download, Globe, MonitorPlay, Video, Search, Filter } from 'lucide-react';
import { useState } from 'react';

const Report = () => {
  const [timeframe, setTimeframe] = useState('This Week');

  // --- MOCK DATABASE FOR TABLE ---
  const [sessions] = useState([
    { id: '1', date: '2026-02-27', domain: 'youtube.com', category: 'Video', duration: '45m', co2: 12.4 },
    { id: '2', date: '2026-02-27', domain: 'github.com', category: 'Development', duration: '1h 10m', co2: 2.1 },
    { id: '3', date: '2026-02-26', domain: 'netflix.com', category: 'Video', duration: '2h 15m', co2: 45.2 },
    { id: '4', date: '2026-02-26', domain: 'stackoverflow.com', category: 'Development', duration: '20m', co2: 0.8 },
    { id: '5', date: '2026-02-25', domain: 'chatgpt.com', category: 'AI', duration: '35m', co2: 5.6 },
    { id: '6', date: '2026-02-25', domain: 'figma.com', category: 'Design', duration: '2h 00m', co2: 8.3 },
  ]);

  const dashboardData = {
    'Today': {
      keyMetrics: {
        totalCarbon: 125.4,
        screenTime: '3h 15m',
        treesNeeded: 0.01
      },
      topSites: [
        { domain: 'youtube.com', carbon: 60, icon: <MonitorPlay size={18} className="text-red-500" /> },
        { domain: 'chatgpt.com', carbon: 35, icon: <Cpu size={18} className="text-purple-500" /> },
        { domain: 'github.com', carbon: 15, icon: <Globe size={18} className="text-gray-500" /> },
        { domain: 'stackoverflow.com', carbon: 10, icon: <Globe size={18} className="text-orange-500" /> },
        { domain: 'netflix.com', carbon: 5, icon: <Video size={18} className="text-red-600" /> },
      ],
      weeklyTrend: [
        { day: '6 AM', value: 10 }, { day: '9 AM', value: 25 }, { day: '12 PM', value: 40 },
        { day: '3 PM', value: 30 }, { day: '6 PM', value: 15 }, { day: '9 PM', value: 5 }, { day: '12 AM', value: 0 }
      ]
    },
    'This Week': {
      keyMetrics: {
        totalCarbon: 845.2,
        screenTime: '14h 30m',
        treesNeeded: 0.04
      },
      topSites: [
        { domain: 'youtube.com', carbon: 320, icon: <MonitorPlay size={18} className="text-red-500" /> },
        { domain: 'chatgpt.com', carbon: 210, icon: <Cpu size={18} className="text-purple-500" /> },
        { domain: 'netflix.com', carbon: 180, icon: <Video size={18} className="text-red-600" /> },
        { domain: 'github.com', carbon: 45, icon: <Globe size={18} className="text-gray-500" /> },
        { domain: 'stackoverflow.com', carbon: 20, icon: <Globe size={18} className="text-orange-500" /> },
      ],
      weeklyTrend: [
        { day: 'Mon', value: 120 }, { day: 'Tue', value: 150 }, { day: 'Wed', value: 90 },
        { day: 'Thu', value: 210 }, { day: 'Fri', value: 180 }, { day: 'Sat', value: 250 }, { day: 'Sun', value: 190 }
      ]
    },
    'This Month': {
      keyMetrics: {
        totalCarbon: 3450.8,
        screenTime: '62h 45m',
        treesNeeded: 0.16
      },
      topSites: [
        { domain: 'youtube.com', carbon: 1200, icon: <MonitorPlay size={18} className="text-red-500" /> },
        { domain: 'netflix.com', carbon: 950, icon: <Video size={18} className="text-red-600" /> },
        { domain: 'chatgpt.com', carbon: 800, icon: <Cpu size={18} className="text-purple-500" /> },
        { domain: 'github.com', carbon: 350, icon: <Globe size={18} className="text-gray-500" /> },
        { domain: 'stackoverflow.com', carbon: 150, icon: <Globe size={18} className="text-orange-500" /> },
      ],
      weeklyTrend: [
        { day: 'Wk 1', value: 800 }, { day: 'Wk 2', value: 950 }, { day: 'Wk 3', value: 700 }, { day: 'Wk 4', value: 1000 }
      ]
    }
  };

  const currentData = dashboardData[timeframe];
  const maxTrendValue = Math.max(...currentData.weeklyTrend.map(d => d.value));

  return (
    <div className="max-w-6xl mx-auto pb-10 w-full px-4">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
             Detailed Footprint Report
          </h1>
          <p className="text-gray-200 mt-1">A deep dive into your digital emissions and browsing habits.</p>
        </div>
        
        <div className="flex gap-3">
          <div className="flex bg-zinc-900/50 p-1 rounded-xl border border-zinc-800 backdrop-blur-sm w-fit shadow-inner">
            {['Today', 'This Week', 'This Month'].map((span) => (
              <button
                key={span}
                onClick={() => setTimeframe(span)}
                className={`px-4 py-1.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  timeframe === span 
                    ? 'bg-green-500 text-black shadow-[0_0_15px_rgba(34,197,94,0.3)]' 
                    : 'text-gray-400 hover:text-white hover:bg-zinc-800/80'
                }`}
              >
                {span}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 bg-green-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors cursor-pointer">
            <Download size={18} /> Export PDF
          </button>
        </div>
      </div>

      {/* --- STAT CARDS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-black p-6 rounded-2xl shadow-md border border-green-500 transition hover:border-gray-200 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col justify-center">
          <p className="text-green-500 text-sm uppercase tracking-wide font-semibold mb-1">Total Carbon Emitted</p>
          <h2 className="text-4xl font-black text-gray-100">{currentData.keyMetrics.totalCarbon} <span className="text-xl font-medium text-gray-200">g</span></h2>
        </div>
        <div className="bg-black p-6 rounded-2xl shadow-sm border border-green-500 transition hover:border-gray-200 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col justify-center">
          <p className="text-green-500 text-sm uppercase tracking-wide font-semibold mb-1">Tracked Screen Time</p>
          <h2 className="text-4xl font-black text-gray-100">{currentData.keyMetrics.screenTime}</h2>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-900 p-6 rounded-2xl shadow-sm flex flex-col justify-center text-white transition hover:-translate-y-2">
          <p className="text-green-100 text-sm uppercase tracking-wide font-semibold mb-1">Ecological Cost</p>
          <h2 className="text-4xl font-black">{currentData.keyMetrics.treesNeeded} <span className="text-xl font-medium text-green-200">Trees</span></h2>
          <p className="text-xs text-green-200 mt-1">Needed to absorb these emissions</p>
        </div>
      </div>

      {/* --- CHARTS GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-black p-6 rounded-2xl shadow-sm border border-gray-400">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Globe className="text-gray-300" /> Top Emitting Domains
          </h3>
          <div className="space-y-5">
            {currentData.topSites.map((site, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <div className="flex items-center gap-2 font-medium text-gray-300">
                    {site.icon} {site.domain}
                  </div>
                  <div className="font-bold text-gray-200">{site.carbon} g</div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div 
                    className="bg-green-500 h-2.5 rounded-full" 
                    style={{ width: `${(site.carbon / currentData.topSites[0].carbon) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black p-6 rounded-2xl shadow-sm border border-gray-400 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Calendar className="text-gray-300" /> Trend Analysis
          </h3>
          
          <div className="flex-1 flex items-end justify-between gap-2 mt-4 pt-4 border-t border-gray-700">
            {currentData.weeklyTrend.map((day, index) => (
              <div key={index} className="flex flex-col items-center flex-1 group">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold text-gray-600 mb-2">
                  {day.value}g
                </span>
                
                <div 
                  className="w-full max-w-[40px] bg-green-500 hover:bg-blue-500 transition-colors rounded-t-md cursor-pointer"
                  style={{ height: `${(day.value / maxTrendValue) * 200}px` }}
                ></div>
                
                <span className="text-sm font-medium text-gray-500 mt-3 whitespace-nowrap">{day.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- DETAILED SESSION HISTORY TABLE --- */}
      <div className="mt-20 bg-black border border-gray-400 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        
        {/* Table Header & Search */}
        <div className="p-6 border-b border-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h3 className="text-xl font-bold text-white">Raw Session Logs</h3>
          <div className="flex gap-3 w-full md:w-auto">
            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-2 flex items-center gap-2 flex-1 md:w-64">
              <Search className="text-gray-500" size={18} />
              <input 
                type="text" 
                placeholder="Search domain..." 
                className="bg-transparent border-none outline-none w-full text-white text-sm placeholder-gray-500"
              />
            </div>
            <button className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-white px-4 py-2 rounded-lg transition-colors">
              <Filter size={18} /> <span className="hidden sm:inline">Filter</span>
            </button>
          </div>
        </div>

        {/* The Data Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-900/50 text-gray-400 text-sm uppercase tracking-wider border-b border-gray-700">
                <th className="p-4 font-semibold">Date</th>
                <th className="p-4 font-semibold">Domain</th>
                <th className="p-4 font-semibold hidden sm:table-cell">Category</th>
                <th className="p-4 font-semibold">Duration</th>
                <th className="p-4 font-semibold text-right">CO₂ Emitted</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 text-gray-300">
              {sessions.map((session) => (
                <tr key={session.id} className="hover:bg-zinc-900/50 transition-colors">
                  <td className="p-4 whitespace-nowrap text-sm">{session.date}</td>
                  <td className="p-4 font-medium text-white">{session.domain}</td>
                  <td className="p-4 hidden sm:table-cell">
                    <span className="bg-zinc-800 text-gray-300 px-3 py-1 rounded-full text-xs">
                      {session.category}
                    </span>
                  </td>
                  <td className="p-4 text-sm">{session.duration}</td>
                  <td className="p-4 text-right font-bold text-green-400">{session.co2}g</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 border-t border-gray-700 bg-zinc-900/30 flex justify-between items-center text-sm text-gray-400">
          <span>Showing 1 to 6 of 42 entries</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded hover:bg-zinc-800 disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 rounded bg-zinc-800 text-white">1</button>
            <button className="px-3 py-1 rounded hover:bg-zinc-800">2</button>
            <button className="px-3 py-1 rounded hover:bg-zinc-800">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Report;