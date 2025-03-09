import React from "react";
import { ChevronRight } from "lucide-react";

interface TicketCardProps {
  companyName: string;
  date: string;
  time: string;
  totalTickets: number;
  totalAmount: number;
  timeSlot: string;
  imageUrl: string;
}

const TicketCard: React.FC<TicketCardProps> = ({
  companyName,
  date,
  time,
  totalTickets,
  totalAmount,
  timeSlot,
  imageUrl,
}) => {
  return (
    <div className="relative p-4 rounded-2xl shadow-md bg-gradient-to-br from-orange-100 to-yellow-200 w-full max-w-sm">
      
      {/* Top Right Badge */}
      <span className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 text-xs rounded-lg font-semibold">
        {timeSlot}
      </span>

      {/* Half Circle Cutouts */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border border-gray-300 rounded-full"></div>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border border-gray-300 rounded-full"></div>

      {/* Top Section */}
      <div className="flex items-center gap-3">
        <img src={imageUrl} alt="Company Logo" className="w-12 h-12 rounded-lg object-cover" />
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{companyName}</h3>
          <p className="text-xs text-gray-500">
            {date} | {time}
          </p>
        </div>
        <button className="h-8 w-8 rounded-full flex items-center justify-center bg-white shadow-md">
          <ChevronRight size={18} className="text-gray-600" />
        </button>
      </div>

      {/* Dashed Divider */}
      <div className="relative my-3">
        <div className="border-t-2 border-dashed border-gray-400 w-full absolute top-1/2 -translate-y-1/2"></div>
      </div>

      {/* Ticket Details */}
      <div className="flex justify-between text-gray-700">
        <div className="flex flex-col">
          <span className="text-xs">Total Tickets</span>
          <span className="font-bold text-lg">{totalTickets}</span>
        </div>
        <div className="flex flex-col text-right">
          <span className="text-xs">Total Amount</span>
          <span className="font-bold text-lg text-green-600">₹{totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
