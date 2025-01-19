import React, { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

// Logout function
const logout = (navigate) => {
  localStorage.removeItem("token"); //remove jwt token
  navigate("/");
};

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [localStorage.getItem("token")]); //change the state when jwt token is deleted/added changes

  return (
    <nav className="py-4 px-9 flex justify-between items-center bg-white shadow-md z-50 w-full">
      <h1 className="text-xl font-bold text-purple-700"
          onClick={() => navigate("/")} // Use the logout function  
      >
        InterviewInsight
      </h1>

      <div>
        {!isLoggedIn ? (
          <Button onClick={() => navigate("/auth")}>Login</Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="w-10 h-10 rounded-full overflow-hidden hover:ring-2 hover:ring-purple-300 transition-all duration-200">
              <Avatar>
                <AvatarImage
                  src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                  className="object-cover"
                />
                <AvatarFallback>AP</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="bg-white shadow-lg rounded-lg p-2 min-w-[150px] mt-2"
              align="end"
            >
              <DropdownMenuLabel className="text-gray-700 font-medium px-2 py-1">
                Anish
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="h-px bg-gray-200 my-1" />
              <DropdownMenuItem
                className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:bg-purple-100 hover:text-purple-700 cursor-pointer"
                onClick={() => navigate("/dashboard")} // Use navigate to route to /dashboard
              >
                Dash Board
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:bg-purple-100 hover:text-purple-700 cursor-pointer"
                onClick={() => navigate("/user-experience")} // Use navigate to route to /dashboard
              >
                Share an Experience
              </DropdownMenuItem>
              
              <DropdownMenuItem className="flex items-center px-3 py-2 rounded-md text-gray-600 hover:bg-purple-100 hover:text-purple-700 cursor-pointer">
                <a href="#" className="flex-1">
                  Profile
                </a>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="h-px bg-gray-200 my-1" />
              <DropdownMenuItem
                className="flex items-center px-3 py-2 rounded-md text-red-600 hover:bg-red-100 cursor-pointer"
                onClick={() => logout(navigate)} // Use the logout function
              >
                <CiLogout className="h-4 w-4 mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
