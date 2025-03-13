import Card from "../components/common/Card";

const mockResults = [
  {
    id: 1,
    title: "Morning Draw",
    subtitle: "Apr 24, 2024 | 10:00 AM",
    numbers: [12, 24, 36, 48, 60],
    badgeText: "Morning",
    totalTickets: 18,
    totalAmount: "₹36.00",
  },
  {
    id: 2,
    title: "Afternoon Draw",
    subtitle: "Apr 24, 2024 | 2:00 PM",
    numbers: [7, 19, 23, 41, 55],
    badgeText: "Afternoon",
    totalTickets: 22,
    totalAmount: "₹44.00",
  },
  {
    id: 3,
    title: "Evening Draw",
    subtitle: "Apr 24, 2024 | 6:00 PM",
    numbers: [5, 15, 28, 35, 49],
    badgeText: "Evening",
    totalTickets: 30,
    totalAmount: "₹60.00",
  },
  {
    id: 4,
    title: "Night Draw",
    subtitle: "Apr 24, 2024 | 10:00 PM",
    numbers: [3, 11, 25, 39, 50],
    badgeText: "Night",
    totalTickets: 26,
    totalAmount: "₹52.00",
  },
  {
    id: 5,
    title: "Late Night Draw",
    subtitle: "Apr 24, 2024 | 12:00 AM",
    numbers: [1, 14, 27, 38, 59],
    badgeText: "Late Night",
    totalTickets: 20,
    totalAmount: "₹40.00",
  },
  {
    id: 6,
    title: "Super Draw",
    subtitle: "Apr 24, 2024 | 8:00 PM",
    numbers: [9, 22, 30, 42, 57],
    badgeText: "Super",
    totalTickets: 25,
    totalAmount: "₹50.00",
  },
  {
    id: 7,
    title: "Mega Draw",
    subtitle: "Apr 24, 2024 | 11:00 PM",
    numbers: [2, 18, 26, 34, 53],
    badgeText: "Mega",
    totalTickets: 28,
    totalAmount: "₹56.00",
  },
  {
    id: 8,
    title: "Ultimate Draw",
    subtitle: "Apr 24, 2024 | 9:00 PM",
    numbers: [6, 21, 32, 40, 51],
    badgeText: "Ultimate",
    totalTickets: 32,
    totalAmount: "₹64.00",
  },
  {
    id: 9,
    title: "Jackpot Draw",
    subtitle: "Apr 24, 2024 | 5:00 PM",
    numbers: [8, 20, 31, 45, 58],
    badgeText: "Jackpot",
    totalTickets: 35,
    totalAmount: "₹70.00",
  },
];

export default function ResultPage() {
  return (
    <div className="pt-20 md:pb-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-secondary">🎉 Latest Results</h2>

      {/* Grid Layout: 1 Card Per Row (Mobile) | 3 Cards Per Row (Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockResults.map((result) => (
          <Card
            key={result.id}
            title={result.title}
            subtitle={result.subtitle}
            numbers={result.numbers}
            badgeText={result.badgeText}
            totalTickets={result.totalTickets}
            totalAmount={result.totalAmount}
          />
        ))}
      </div>
    </div>
  );
}
