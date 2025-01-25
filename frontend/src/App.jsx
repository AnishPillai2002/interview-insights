import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import HomePage from "./pages/HomePage";

import InterviewExperiencePage from "./pages/InterviewDetailsPage";
import UserExperiencePage from "./pages/UserExperiencePage/UserExperiencePage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      {
        path:"/interview-experience/:id",
        element:<InterviewExperiencePage/>
      },
      {
        path:"/user-experience",
        element:<UserExperiencePage/>
      }

    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
