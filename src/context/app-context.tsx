import { createContext, useContext, useState, type ReactNode } from "react"
import type {AppContextType, Winner, Order, Theme } from "../lib/types"


const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [selectedPrize, setSelectedPrize] = useState<string>("All Prizes")
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const winners: Winner[] = [] 
  const orders: Order[] = [] 



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

