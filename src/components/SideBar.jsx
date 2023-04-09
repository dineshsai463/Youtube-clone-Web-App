import { RxHamburgerMenu } from "react-icons/rx";
import { BsYoutube } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SideBar() {
  const { isOpen } = useSelector((state) => state.toggle);

  return isOpen ? (
    <div className="w-1/5 flex flex-col items-start p-4  h-screen  z-50">
      {/* <RxHamburgerMenu  className="w-10 h-10 mx-4"  />
  <div className="flex items-center basis-1/4">
    <BsYoutube className="w-10 h-10 mx-2 text-red-600" />
    YouTube
  </div> */}
      <div className="h-auto border-b-2 m-2 p-2  ">
        <Link to={"/"}>
          <button className="p-3 hover:bg-gray-200 rounded-lg ">Home</button>{" "}
        </Link>
        <button className="p-3 hover:bg-gray-200 rounded-lg">Shorts Videos</button>
        <button className="p-3 hover:bg-gray-200 rounded-lg "> Subscriptions</button>
      </div>
      <div className="h-auto border-b-2 m-2 p-2">
        <button className="p-3 hover:bg-gray-200 rounded-lg">Your History</button>
        <button className="p-3 hover:bg-gray-200 rounded-lg ">Your Subscriptions</button>
        <button className="p-3 hover:bg-gray-200 rounded-lg ">Your Liked Videos</button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default SideBar;
