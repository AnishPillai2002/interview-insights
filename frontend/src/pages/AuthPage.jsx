import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from '@/page_components/Login';
import Signup from '@/page_components/Signup';

const AuthPage = () => {
  return (
    <div className="mt-36 flex flex-col gap-10 items-center bg-gray-100">
     
        <h1 className="text-5xl font-extrabold text-center">Login / Sign Up</h1>

        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Login />
          </TabsContent>
          <TabsContent value="signup">
            <Signup />
          </TabsContent>
        </Tabs>
    </div>
  );
};

export default AuthPage;
