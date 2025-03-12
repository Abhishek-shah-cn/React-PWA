import React from "react"
import "../../index.css"
import Navigation from "./Navigation"
import { Toaster } from "../ui/toaster"
import { ThemeProvider } from "../theme-provider"


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   

  return (
    <ThemeProvider >
      <div className="flex bg-background bg-card text-foreground md:flex-col md:min-h-screen">
        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navigation variant="desktop" />
        </div>

        {/* Main Content */}
        <main className="flex-1 pb-8 md:pb-0">{children}</main>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 z-10">
          <Navigation variant="mobile" />
        </div>
      </div>

      {/* Toast Notifications */}
      <Toaster />
    </ThemeProvider>
  )
}

export default Layout
