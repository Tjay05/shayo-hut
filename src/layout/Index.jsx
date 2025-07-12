import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const AppLayout = () => {
  return (
    <div className="bg-linear-to-r/oklab from-gradient-purple to-gradient-pink">
      <Navbar/>

      <div className="bg-white rounded-t-3xl py-4">
        <div className="rule">
          <Outlet/>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
 
export default AppLayout;