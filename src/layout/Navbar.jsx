import { RxHamburgerMenu } from "react-icons/rx";
import { PiNotificationBold } from "react-icons/pi";

const Navbar = () => {
  return (
    <header className="flex justify-between rule py-4 items-center">
      <div className="flex gap-3 items-center">
        <RxHamburgerMenu color="white" size={25}/>
        <p className="font-[Dancing_Script] font-extrabold text-white text-2xl">Shayo Hut</p>
      </div>
      <PiNotificationBold color="white" size={25} />
    </header>
  );
}
 
export default Navbar;