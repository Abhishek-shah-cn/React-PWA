"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { Winner, Order } from "../lib/types"


type AppContextType = {
  winners: Winner[]
  orders: Order[]
  selectedPrize: string
  setSelectedPrize: (prize: string) => void
  theme: "light" | "dark"
  toggleTheme: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedPrize, setSelectedPrize] = useState<string>("All Prizes")
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const winners: Winner[] = [] // Default empty array
  const orders: Order[] = [] // Default empty array



  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <AppContext.Provider
      value={{
        winners,
        orders,
        selectedPrize,
        setSelectedPrize,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}

