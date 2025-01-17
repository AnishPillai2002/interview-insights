import Footer from "@/page_components/Footer";
import Navbar from "@/page_components/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen p-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
