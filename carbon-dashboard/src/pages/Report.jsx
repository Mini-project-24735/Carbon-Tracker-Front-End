import { BarChart3, Calendar, Cpu, Download, Globe, MonitorPlay, Video } from 'lucide-react';
import { useState } from 'react';

const Report = () => {
  const [timeframe, setTimeframe] = useState('This Week');

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
    <div className="max-w-6xl mx-auto pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <BarChart3 className="text-blue-600" /> Detailed Footprint Report
          </h1>
          <p className="text-gray-200 mt-1">A deep dive into your digital emissions and browsing habits.</p>
        </div>
        
        <div className="flex gap-3">
          <select 
            value={timeframe} 
            onChange={(e) => setTimeframe(e.target.value)}
            className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium cursor-pointer"
          >
            <option value="Today">Today</option>
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
          </select>
          <button className="flex items-center gap-2 bg-green-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors cursor-pointer">
            <Download size={18} /> Export PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
          <p className="text-gray-500 text-sm uppercase tracking-wide font-semibold mb-1">Total Carbon Emitted</p>
          <h2 className="text-4xl font-black text-gray-900">{currentData.keyMetrics.totalCarbon} <span className="text-xl font-medium text-gray-500">g</span></h2>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center">
          <p className="text-gray-500 text-sm uppercase tracking-wide font-semibold mb-1">Tracked Screen Time</p>
          <h2 className="text-4xl font-black text-gray-900">{currentData.keyMetrics.screenTime}</h2>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-emerald-700 p-6 rounded-2xl shadow-sm flex flex-col justify-center text-white">
          <p className="text-green-100 text-sm uppercase tracking-wide font-semibold mb-1">Ecological Cost</p>
          <h2 className="text-4xl font-black">{currentData.keyMetrics.treesNeeded} <span className="text-xl font-medium text-green-200">Trees</span></h2>
          <p className="text-xs text-green-200 mt-1">Needed to absorb these emissions</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-400">
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

        <div className="bg-gray-900 p-6 rounded-2xl shadow-sm border border-gray-400 flex flex-col">
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
                  className="w-full max-w-[40px] bg-green-400 hover:bg-blue-500 transition-colors rounded-t-md cursor-pointer"
                  style={{ height: `${(day.value / maxTrendValue) * 200}px` }}
                ></div>
                
                <span className="text-sm font-medium text-gray-500 mt-3 whitespace-nowrap">{day.day}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Report;