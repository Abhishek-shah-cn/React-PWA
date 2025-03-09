export type Winner = {
  id: number
  name: string
  position: number
  prize: number
  profileImage: string
}

export type OrderTimeSlot = "Morning" | "Afternoon" | "Evening"

export type Order = {
  id: string
  companyName: string
  date: string
  time: string
  totalTickets: number
  totalAmount: number
  timeSlot: OrderTimeSlot
}

export type NavItem = {
  name: string
  path: string
  active: boolean
}

