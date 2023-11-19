// components/StatsPanel.js

export default function StatsPanel() {
  // Define your stats data here or receive it as props
  const stats = [
    { number: '$54M', label: 'Total sales' },
    { number: '$3.2M', label: 'Total earnings' },
    { number: '120+', label: 'Listings' },
    { number: '308,000', label: 'Buyers' },
  ];

  return (
    <div className="flex justify-center px-6 py-3">
{stats.map((stat, index) => (
        <div key={index} className="text-center mr-10">
          <div className="text-5xl mb-2 font-semibold text-orange">{stat.number}</div> {/* Ensuring text is dark */}
          <div className="text-sm text-black text-lg">{stat.label}</div>
        </div>
))}
    </div>
  );
}
