
import { useState } from "react"



export default function PlayPage() {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null)
  const [message, setMessage] = useState<{ text: string; color: string } | null>(null)

  const luckyNumber = 7 

  const handleNumberClick = (num: number) => {
    setSelectedNumber(num)

    if (num === luckyNumber) {
      setMessage({ text: "🎉 Congratulations! You won!", color: "bg-green-500" })
    } else {
      setMessage({ text: "❌ Sorry! Try again.", color: "bg-red-500" })
    }
  }

  return (
    <div className="flex bg-card flex-col items-center justify-center min-h-screen bg-background text-foreground px-4">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold mb-2 text-secondary">🎰 Pick Your Lucky Number</h2>
        <p className="text-muted-foreground text-secondary">Choose a number and test your luck!</p>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
 
</div>
      </div>

      {/* Number Selection Grid */}
      <div className="max-w-md w-full">
        <div className="grid grid-cols-5 gap-4 mb-6">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num)}
              className={`w-16 h-16 text-secondary flex  cursor-pointer items-center justify-center text-xl font-bold rounded-lg shadow-md transition-all
                ${
                  selectedNumber === num
                    ? num === luckyNumber
                      ? "bg-green-500 text-white scale-110"
                      : "bg-red-500 text-white scale-110"
                    : "bg-card text-foreground hover:bg-primary hover:text-gray-400"
                }
              `}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Message Display */}
      {message && (
        <div className={`mt-4 px-6 py-3 text-lg font-semibold rounded-lg text-white shadow-md animate-bounce ${message.color}`}>
          {message.text}
        </div>
      )}
    </div>
  )
}
