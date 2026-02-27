import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const weeklyData = [
  { day: 'Mon', emissions: 45 }, { day: 'Tue', emissions: 52 },
  { day: 'Wed', emissions: 38 }, { day: 'Thu', emissions: 65 },
  { day: 'Fri', emissions: 48 }, { day: 'Sat', emissions: 85 }, 
  { day: 'Sun', emissions: 70 },
];

const EmissionsChart = () => {
  return (
    <div className="bg-transparent h-72 w-full mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={weeklyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="day" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
          <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
          <Area type="monotone" dataKey="emissions" stroke="#10b981"  strokeWidth={3} fillOpacity={1} fill="url(#colorEmissions)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmissionsChart;