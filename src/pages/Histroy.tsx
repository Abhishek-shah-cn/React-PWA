import React from "react";
import { ChevronRight } from "lucide-react";
import { orders } from "../lib/mock-data";
import type { Order, OrderTimeSlot } from "../lib/types";
import com1 from "../assets/com1.svg";
import com2 from "../assets/com2.svg";
import com3 from "../assets/com3.svg";

const timeSlotGradients: Record<OrderTimeSlot, string> = {
  Morning: "bg-gradient-to-r from-orange-100 to-yellow-200",
  Afternoon: "bg-gradient-to-r from-pink-100 to-red-200",
  Evening: "bg-gradient-to-r from-blue-100 to-indigo-200",
};

const timeSlotImageMap: Record<OrderTimeSlot, string> = {
  Morning: com1,
  Afternoon: com2,
  Evening: com3,
};

const History: React.FC = () => {
  return (
    <div className="pt-20 pb-8 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-secondary">
        📜 Order History
      </h2>

      {/* Grid Layout: Mobile (1), Tablet (2), Desktop (3) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.length > 0 ? (
          orders.map((order) => <OrderCard key={order.id} order={order} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No orders found.
          </p>
        )}
      </div>
    </div>
  );
};

const OrderCard: React.FC<{ order: Order }> = ({ order }) => {
  return (
    <div
      className={`relative p-5 rounded-xl shadow-md transition-all transform hover:scale-[1.03] ${timeSlotGradients[order.timeSlot]}`}
    >
      {/* Badge */}
      <span className="absolute top-0 right-0 rounded-l-r bg-black/20 text-white px-3 py-1 border-l-2 border-b-2 border-white rounded-bl-lg text-xs font-semibold shadow-md">
        {order.timeSlot}
      </span>

      {/* Header Section */}
      <div className="flex items-center space-x-4 ">
        {/* Image */}
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-md">
          <img
            src={timeSlotImageMap[order.timeSlot]}
            alt={order.companyName}
            className="object-cover w-10 h-10 rounded-md"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">
            {order.companyName}
          </h3>
          <p className="text-sm text-gray-500">
            {order.date} | {order.time}
          </p>
        </div>

        {/* Arrow Icon */}
        <button
          className="h-8 w-8 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-gray-200"
          aria-label="View order details"
        >
          <ChevronRight size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Dashed Divider */}
      <div className="relative my-4 py-4">
        <div className="border-t-2 border-dashed border-gray-400 w-full absolute top-1/2 -translate-y-1/2" />
      </div>

      {/* Order Details */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-sm text-gray-600">Total Tickets</div>
        <div className="text-lg font-bold text-end">{order.totalTickets}</div>
        <div className="text-sm text-gray-600">Total Amount</div>
        <div className="text-lg font-bold text-green-600 text-end">
          ₹{order.totalAmount.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default History;
