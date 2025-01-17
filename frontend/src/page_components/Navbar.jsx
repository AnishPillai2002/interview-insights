import React from "react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  
  const navigate = useNavigate();
  
  return (

    <>
    <nav className="py-4 px-9 flex justify-between items-center bg-white shadow-md z-50 w-full">
        <h1 className="text-xl font-bold text-purple-700">InterviewInsight</h1>

        <div>
          {
            true?<Button onClick={()=>navigate("/auth")}>Login</Button>
            :(
              <DropdownMenu>
                <DropdownMenuTrigger className='w-10 rounded-full overflow-hidden'>
                <Avatar>
                  <AvatarImage src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" className="object-contain" />
                  <AvatarFallback>AP</AvatarFallback>
                </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Anish</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <a href="#" className="hover:text-purple-500">Share Your Experience</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="hover:text-purple-500">Profile</a>
                  </DropdownMenuItem>
                  
                  <DropdownMenuItem className="text-red-600">
                    <LogOut className="h-4 w-4"/>  
                    <span onClick={()=>{
                        
                    }}>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

            )
          }      
        </div> 
    </nav>
    
    </> 
  );
};

export default Navbar;
