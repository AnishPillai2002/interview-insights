import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/app-layout";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import ShareYourInterviewExperience from "./pages/ShareExperiencePage";
import InterviewExperiencePage from "./pages/InterviewDetailsPage";
import UserExperiencePage from "./pages/UserExperiencePage";

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
        path: "/share",
        element: <ShareYourInterviewExperience/>
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
