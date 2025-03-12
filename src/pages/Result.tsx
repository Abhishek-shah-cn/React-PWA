

import Card from "../components/common/Card"

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
]

export default function ResultPage() {
  return (
    <div className="pt-20 md:pb-8 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-secondary">🎉 Latest Results</h2>

      <div className="space-y-6">
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
  )
}



