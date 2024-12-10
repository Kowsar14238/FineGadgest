import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen mx-5">
            <div className="my-2">
                <Navbar />
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
            <div className="mb-5">
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;