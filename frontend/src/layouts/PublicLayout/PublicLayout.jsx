import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer will be added later */}
    </div>
  );
};

export default PublicLayout;