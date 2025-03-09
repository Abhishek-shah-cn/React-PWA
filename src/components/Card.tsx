import React from "react"
import { ChevronRight } from "lucide-react"

type CardProps = {
  title: string
  subtitle: string
  numbers: number[]
  badgeText?: string
  totalTickets?: number
  totalAmount?: string
}

const Card: React.FC<CardProps> = ({ title, subtitle, numbers, badgeText, totalTickets, totalAmount }) => {
  return (
    <div className="relative bg-gradient-to-r mb-10 from-orange-50 to-rose-50 p-5 rounded-xl overflow-hidden transition-transform transform hover:scale-105">
      
      {/* Cutout Circles */}
      <div className="absolute -top-3 left-1/4 -translate-x-1/2 w-6 h-6 bg-white border border-gray-200 rounded-full"></div>
      <div className="absolute -bottom-3 left-1/4 -translate-x-1/2 w-6 h-6 bg-white border border-gray-200 rounded-full"></div>

      {/* Badge */}
      {badgeText && (
        <span className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-lg text-xs font-semibold shadow-md">
          {badgeText}
        </span>
      )}

      {/* Header Section */}
      <div className="flex items-center space-x-4">
        {/* Placeholder Image */}
        <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center shadow-md">
          🎟️
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>

        {/* Arrow Icon (Lucide) */}
        <ChevronRight className="text-gray-500 w-5 h-5" />
      </div>

      {/* Dashed Divider with Cutouts */}
      <div className="relative my-4">
        <div className="border-t-2 border-dashed border-gray-400 w-full absolute top-1/2 -translate-y-1/2" />
        
      </div>

      {/* Numbers Section */}
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <p className="text-sm text-gray-600">Total Tickets</p>
          <p className="text-lg font-bold">{totalTickets}</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-600">Total Amount</p>
          <p className="text-lg font-bold text-green-600">{totalAmount}</p>
        </div>
      </div>

      {/* Winning Numbers */}
      <div className="flex justify-center gap-2 mt-4">
        {numbers.map((num) => (
          <div
            key={num}
            className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center font-bold shadow-md text-gray-800"
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
