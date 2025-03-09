import type { Winner, Order } from "./types"
import user3 from "../assets/user3.svg"
import user4 from "../assets/user4.svg"
import user1 from "../assets/user1.svg"

export const winners: Winner[] = [
  {
    id: 1,
    name: "Cindy McKay",
    position: 1,
    prize: 5000000,
    profileImage: user3,
  },
  {
    id: 2,
    name: "John Doe",
    position: 2,
    prize: 2000000,
    profileImage: user4,
  },
  {
    id: 3,
    name: "Emma Stone",
    position: 3,
    prize: 1000000,
    profileImage:user4,
  },
  {
    id: 4,
    name: "Michael Smith",
    position: 4,
    prize: 500000,
    profileImage: user1,
  },
  {
    id: 5,
    name: "Sophia Johnson",
    position: 5,
    prize: 250000,
    profileImage:user1,
  },
  {
    id: 6,
    name: "Liam Brown",
    position: 6,
    prize: 100000,
    profileImage:user1,
  },
  {
    id: 7,
    name: "Olivia Wilson",
    position: 7,
    prize: 75000,
    profileImage: user4,
  },
  {
    id: 8,
    name: "Noah Martinez",
    position: 8,
    prize: 50000,
    profileImage: user3,
  },
  {
    id: 9,
    name: "Ava Davis",
    position: 9,
    prize: 25000,
    profileImage: user4,
  },
  {
    id: 10,
    name: "William Garcia",
    position: 10,
    prize: 10000,
    profileImage: user1,
  },
  {
    id: 11,
    name: "Ava Davis",
    position: 9,
    prize: 25000,
    profileImage: user4,
  },
  {
    id: 12,
    name: "William Garcia",
    position: 10,
    prize: 10000,
    profileImage: user1,
  },
];


export const orders: Order[] = [
  {
    id: "1",
    companyName: "Dream 11",
    date: "Apr 24, 2024",
    time: "10:00 AM",
    totalTickets: 130,
    totalAmount: 2600.0,
    timeSlot: "Morning",
  },
  {
    id: "2",
    companyName: "Binzo Bee",
    date: "Apr 24, 2024",
    time: "10:00 AM",
    totalTickets: 100,
    totalAmount: 1200.0,
    timeSlot: "Afternoon",
  },
  {
    id: "3",
    companyName: "Fasto New",
    date: "Apr 24, 2024",
    time: "10:00 AM",
    totalTickets: 6,
    totalAmount: 900.0,
    timeSlot: "Evening",
  },
]

