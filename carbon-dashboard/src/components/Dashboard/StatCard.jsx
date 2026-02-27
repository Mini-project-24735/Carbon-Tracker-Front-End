
const StatCard = ({ icon, title, value, desc, colorClass }) => {
  return (
    <div className="bg-green-600 p-6 rounded-xl shadow-sm border border-green-900 flex items-center gap-4 transition hover:shadow-md transition hover:-translate-y-2">
      <div className={`p-4 rounded-full ${colorClass} bg-opacity-10`}>
        {icon}
      </div>
      <div>
        <h3 className="text-white text-sm font-medium">{title}</h3>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
        <p className="text-xs text-white mt-1">{desc}</p>
      </div>
    </div>
  );
};

export default StatCard;