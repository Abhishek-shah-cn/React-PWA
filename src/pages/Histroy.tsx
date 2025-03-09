import React from "react"
import { ChevronRight } from "lucide-react"
import { orders } from "../lib/mock-data" // Ensure this is a local file
import type { Order, OrderTimeSlot } from "../lib/types" // Ensure this is a local file
import com1 from "../assets/com1.svg";
import com2 from "../assets/com2.svg";
import com3 from "../assets/com3.svg";

const timeSlotGradients: Record<OrderTimeSlot, string> = {
  Morning: "bg-gradient-to-r from-orange-100 to-yellow-200",
  Afternoon: "bg-gradient-to-r from-pink-100 to-red-200",
  Evening: "bg-gradient-to-r from-blue-100 to-indigo-200",
}

const timeSlotImageMap: Record<OrderTimeSlot, string> = {
  Morning: com1,
  Afternoon: com2,
  Evening: com3,
};

const History: React.FC = () => {
  return (
    <div className="pt-20 md:pb-8 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-secondary">📜 Order History</h2>

      <div className="space-y-6">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  )
}

const OrderCard: React.FC<{ order: Order }> = ({ order }) => {
  return (
    <div className={`relative p-5 rounded-xl  ${timeSlotGradients[order.timeSlot]} overflow-hidden transition-transform transform hover:scale-105`}>
      
      {/* Top and Bottom Cutouts */}
      <div className="absolute -top-3 left-1/6  -translate-x-1/2 w-6 h-6 bg-white  rounded-full"></div>
      <div className="absolute -bottom-3 left-1/6 -translate-x-1/2 w-6 h-6 bg-white  rounded-full"></div>

      {/* Badge */}
      <span className="absolute top-0 right-0 bg-black/20 text-white px-3 py-1 border-l-2 border-b-2 border-white rounded-bl-lg text-xs font-semibold shadow-md">
        {order.timeSlot}
      </span>

      {/* Header Section */}
      <div className="flex items-center space-x-4">
        {/* Image */}
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
          <img
            src={timeSlotImageMap[order.timeSlot] || "/placeholder.svg"}
            alt={order.companyName}
            width={50}
            height={50}
            className="object-cover rounded-md"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{order.companyName}</h3>
          <p className="text-sm text-gray-500">{order.date} | {order.time}</p>
        </div>

        {/* Arrow Icon */}
        <button className="h-8 w-8  rounded-full flex items-center justify-center bg-white shadow-md">
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Dashed Divider with Cutouts */}
      <div className="relative my-4 py-4">
        <div className="border-t-2 border-dashed border-gray-400 w-full absolute top-1/2 -translate-y-1/2" />
      </div>

      {/* Order Details */}
      <div className="flex justify-between">
        <div className="space-y-1 flex flex-col justify-around">
          <p className="text-sm text-gray-600">Total Tickets</p>
          <p className="text-sm text-gray-600">Total Amount</p>
        
        </div>
        <div className="space-y-1 ">
          <p className="text-lg font-bold">{order.totalTickets}</p>
          <p className="text-lg font-bold text-green-600">₹{order.totalAmount.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default History
