import React from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../theme-toggle";
import { useTheme } from "../theme-provider";
import { NavItem, NavigationProps, NavItemLinkProps, NavigationComponentProps } from "../../lib/types"; 

import Home from "../../assets/home.svg";
import History from "../../assets/history.svg";
import Winner from "../../assets/winner.svg";
import Result from "../../assets/result.svg";
import More from "../../assets/more.svg";

const NAV_ITEMS: NavItem[] = [
  { name: "Play", href: "/play", icon: Home },
  { name: "Result", href: "/result", icon: Result },
  { name: "History", href: "/history", icon: History },
  { name: "Winner", href: "/winners", icon: Winner },
  { name: "More", href: "/more", icon: More },
];

const Navigation: React.FC<NavigationProps> = ({ variant }) => {
  const location = useLocation();
  const { theme } = useTheme();

  const activeStyles = "text-[#6117FF] bg-[#6117FF]/10";
  const inactiveTextColor = theme === "dark" ? "text-white" : "text-black";

  return variant === "desktop" ? (
    <DesktopNav activeStyles={activeStyles} inactiveTextColor={inactiveTextColor} location={location} />
  ) : (
    <MobileNav activeStyles={activeStyles} inactiveTextColor={inactiveTextColor} location={location} />
  );
};

const DesktopNav: React.FC<NavigationComponentProps> = ({ activeStyles, inactiveTextColor, location }) => (
  <nav className="bg-card dark:bg-card shadow-md">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl font-bold text-primary flex items-center">
            <img src={Home} alt="Logo" className="w-6 h-6 mr-2" /> Lottery Bee
          </span>
        </div>

        {/* Navigation Items */}
        <div className="flex items-center">
          {NAV_ITEMS.map(({ name, href, icon }) => {
            const isActive = location.pathname === href;
            return (
              <NavItemLink 
                key={name} 
                name={name} 
                href={href} 
                icon={icon} 
                isActive={isActive} 
                activeStyles={activeStyles} 
                inactiveTextColor={inactiveTextColor} 
              />
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

const MobileNav: React.FC<NavigationComponentProps> = ({ activeStyles, inactiveTextColor, location }) => (
  <nav className="flex justify-around py-2 bg-card dark:bg-card border-t border-border">
    {NAV_ITEMS.map(({ name, href, icon }) => {
      const isActive = location.pathname === href;
      return (
        <Link 
          key={name} 
          to={href} 
          className={`flex flex-col items-center px-3 py-2 transition-all duration-200 ${isActive ? activeStyles : inactiveTextColor} hover:bg-[#6117FF]/10 hover:text-[#6117FF]`}
        >
          <img src={icon} alt={name} className="w-6 h-6 transition-all duration-200" />
          <span className="text-xs mt-1">{name}</span>
          {isActive && <div className="w-1.5 h-1.5 bg-[#6117FF] rounded-full mt-1" />}
        </Link>
      );
    })}
  </nav>
);

const NavItemLink: React.FC<NavItemLinkProps> = ({ name, href, icon, isActive, activeStyles, inactiveTextColor }) => (
  <Link 
    to={href} 
    className={`px-4 py-2 mx-1 rounded-md text-sm font-medium flex items-center transition-all duration-200 
    ${isActive ? activeStyles : `${inactiveTextColor} hover:bg-[#6117FF]/10 hover:text-[#6117FF]`}`}
  >
    <img src={icon} alt={name} className="w-6 h-6 mr-2 transition-all duration-200" />
    <span>{name}</span>
  </Link>
);

export default Navigation;
