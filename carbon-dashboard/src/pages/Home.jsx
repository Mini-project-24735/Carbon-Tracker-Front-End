import { ArrowBigRight, Car, Clock, CloudLightning } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import EmissionsChart from '../components/Dashboard/EmissionsChart';
import StatCard from '../components/Dashboard/StatCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const username = localStorage.getItem('carbonUser') || 'User';
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex">
          <h1 className="text-3xl font-bold text-white">Hello, {username}! 👋</h1>
        </div>
        <div>
          <button onClick={() => navigate('/report')} className="flex items-center justify-between text-white mt-4 gap-2 font-semibold text-xl bg-green-700 p-3 border rounded-2xl border-gray-500 hover:bg-green-500 hover:text-gray-200 transition-colors duration-300 ease-in-out">View detailed Report   <ArrowBigRight size={20} /></button>
        </div>
      </div>
      <p className="text-gray-100 mt-2 mb-4">Here is your digital carbon footprint summary.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard icon={<CloudLightning size={28} className="text-red-500" />} title="Total CO₂" value="403 g" desc="This week" colorClass="text-red-500 bg-red-500" />
        <StatCard icon={<Clock size={28} className="text-blue-900" />} title="Active Browsing" value="12h 45m" desc="This week" colorClass="text-blue-500 bg-blue-900" />
        <StatCard icon={<Car size={28} className="text-green-500" />} title="Car Equivalent" value="3.2 km" desc="Distance driven" colorClass="text-green-500 bg-green-500 " />
      </div>

      <div className="bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-500">
        <h2 className="text-lg font-bold text-gray-100">Weekly Emissions Trend</h2>
        <EmissionsChart />
        </div>
      </div>
  );
};

export default Home;