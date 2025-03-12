import  { useState, useEffect } from "react"
import { Moon, Sun, Settings, HelpCircle, LogOut, User } from "lucide-react"
import { Switch } from "../components/ui/switch" 
import { toast } from "../hooks/use-toast" 

export default function MorePage() {
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check local storage for theme preference
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setTheme(savedTheme)
      document.body.classList.toggle("dark", savedTheme === "dark")
    }
  }, [])

  const isDarkMode = mounted && theme === "dark"

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark"
    setTheme(newTheme)
    document.body.classList.toggle("dark", newTheme === "dark")

    // Save theme preference in local storage
    localStorage.setItem("theme", newTheme)

    toast({
      title: `${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} mode activated`,
      description: `The app theme has been changed to ${newTheme} mode.`,
      duration: 2000,
    })
  }

  const menuItems = [
    { icon: <User size={20} />, label: "My Profile", path: "/profile" },
    { icon: <Settings size={20} />, label: "Settings", path: "/settings" },
    { icon: <HelpCircle size={20} />, label: "Help & Support", path: "/help" },
    { icon: <LogOut size={20} />, label: "Logout", path: "/logout" },
  ]

  return (
    <div className="pt-20 md:pb-8">

      <div className="px-4 -mt-10 max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 mr-3">
                {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
              </span>
              <span className="font-medium">Dark Mode</span>
            </div>
            {/* Use your custom Switch component */}
            <Switch checked={isDarkMode} onCheckedChange={toggleTheme} aria-label="Toggle dark mode" className="border border-gray-300"/>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer"
                onClick={() => (window.location.href = item.path)} // Simulating navigation
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 mr-3">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
