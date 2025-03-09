import  { useState } from "react";
import Select from "react-select";
import { winners } from "../lib/mock-data"; // Import mock data
import medal1 from "../assets/medal 1.svg"
import medal2 from "../assets/medal 2.svg"
import medal3 from "../assets/medal 3.svg"



const prizeOptions = [
  { value: "All Prizes", label: "All Prizes" },
  { value: "Daily", label: "Daily" },
  { value: "Weekly", label: "Weekly" },
  { value: "Monthly", label: "Monthly" },
];


export default function WinnersPage() {
  const [selectedPrize, setSelectedPrize] = useState("All Prizes");

  // Filter winners based on selection
  const filteredWinners =
    selectedPrize === "All Prizes"
      ? winners
      : winners.filter((winner: any) => winner.prizeType === selectedPrize);

  const topWinners = filteredWinners.filter((winner: any) => winner.position <= 3);
  const otherWinners = filteredWinners.filter((winner: any) => winner.position > 3);


  const medalImages: Record<number, string> = {
    1: medal1,
    2: medal2,
    3: medal3,
  };

  return (
    <div className="pt-20 px-4 max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="font-bricolage text-2xl font-bold  text-center mb-6">🏆 Winners List</h2>

      {/* Prize Selection Dropdown */}
      <Select
        options={prizeOptions}
        defaultValue={prizeOptions[0]}
        onChange={(selected) => setSelectedPrize(selected?.value || "All Prizes")}
        className="mb-6"
      />

      {/* Top Winners Podium (Fixed) */}
<div className="flex justify-center mb-8 relative">
  {topWinners.map((winner) => (
    <div
      key={winner.id}
      className="flex flex-col items-center mx-3 relative"
      style={{
        order: winner.position === 1 ? 2 : winner.position === 2 ? 3 : 1,
        marginTop: winner.position === 1 ? "-20px" : "0px",
      }}
    >
      {/* Profile Image */}
      <div className="relative mb-2">
        <div className="rounded-full overflow-hidden border-4 border-white shadow-lg w-24 h-24">
          <img
            src={winner.profileImage || "/placeholder.svg"}
            alt={winner.name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Medal Image Instead of Number */}
        {medalImages[winner.position] && (
          <img
            src={medalImages[winner.position]}
            alt={`Medal ${winner.position}`}
            className="absolute -bottom-4  left-6  w-12 h-12"
          />
        )}
      </div>

      <div className="text-center my-4">
        <p className="text-sm font-medium">{winner.name}</p>
        <p className="text-yellow-500 flex items-center justify-center font-semibold">
          ₹ {winner.prize.toLocaleString()}
        </p>
      </div>
    </div>
  ))}
</div>


      {/* Other Winners List (Scrollable with White Scrollbar) */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4">
        <div className="max-h-120 mb-4 overflow-y-auto custom-scrollbar">
          {otherWinners.length > 0 ? (
            otherWinners.map((winner) => (
              <div key={winner.id} className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
                {/* Position */}
                <span className="flex items-center justify-center w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full mr-3 font-semibold">
                  {winner.position}
                </span>
                {/* Profile Image */}
                <img
                  src={winner.profileImage || "/placeholder.svg"}
                  alt={winner.name}
                  className="rounded-full mr-3 h-10 w-10 object-cover"
                  width={50}
                  height={50}
                />
                {/* Winner Name */}
                <div className="flex-1">
                  <p className="font-medium">{winner.name}</p>
                </div>
                {/* Prize Amount */}
                <div className="text-yellow-500 font-semibold">
                  ₹ {winner.prize.toLocaleString()}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-4">No winners found for this category.</p>
          )}
        </div>
      </div>
    </div>
  );
}
