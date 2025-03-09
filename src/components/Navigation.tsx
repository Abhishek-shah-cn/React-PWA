import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Nfc } from 'lucide-react';
import {
  PlayCircle,
  Clock,
  Trophy,
  MoreHorizontal,
  CheckCircle,
} from "lucide-react";
import ThemeToggle from "./theme-toggle";
import { useTheme } from "./theme-provider"; // ✅ Import theme context

type NavItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

type NavigationProps = {
  variant: "mobile" | "desktop";
};

const Navigation: React.FC<NavigationProps> = ({ variant }) => {
  const location = useLocation();
  const { theme } = useTheme(); // ✅ Get the current theme

  const navItems: NavItem[] = [
    { name: "Play", href: "/play", icon: <PlayCircle size={24} /> },
    { name: "Result", href: "/result", icon: <CheckCircle size={24} /> },
    { name: "History", href: "/history", icon: <Clock size={24} /> },
    { name: "Winner", href: "/winners", icon: <Trophy size={24} /> },
    { name: "More", href: "/more", icon: <MoreHorizontal size={24} /> },
  ];

  // ✅ Active state styles (remains the same across themes)
  const activeTextColor = "text-[#6117FF]";
  const activeBgColor = "bg-[#6117FF]/10";

  // ✅ Change only inactive text color based on theme
  const inactiveTextColor = theme === "dark" ? "text-white" : "text-black";

  if (variant === "desktop") {
    return (
      <nav className="bg-card dark:bg-card shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl flex font-bold text-primary">
                <Nfc /> Lottery Bee
                </span>
              </div>
            </div>
            <div className="flex items-center">
              {navItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 mx-1 rounded-md text-sm font-medium flex items-center 
                    ${isActive ? `${activeTextColor} ${activeBgColor}` : `${inactiveTextColor} hover:bg-secondary`}`}
                >
                  <span className={`mr-2 ${isActive ? activeTextColor : "text-secondary"}`}>
                    {item.icon}
                  </span>
                  <span className={`${isActive ? activeTextColor : "text-secondary"}`}>
                    {item.name}
                  </span>
                </Link>                
                );
              })}
              <div className="ml-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex justify-around py-2 bg-card dark:bg-card border-t border-border">
      {navItems.map((item) => {
        const isActive = location.pathname === item.href;
        return (
          <Link
            key={item.name}
            to={item.href}
            className={`flex flex-col items-center px-3 py-2 ${
              isActive ? activeTextColor : inactiveTextColor
            }`}
          >
            {item.icon}
            <span className="text-xs mt-1">{item.name}</span>
            {isActive && (
              <div className="w-1.5 h-1.5 bg-[#6117FF] rounded-full mt-1" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
