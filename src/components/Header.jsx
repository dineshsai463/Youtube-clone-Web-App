import { RxHamburgerMenu } from "react-icons/rx";
import { BsYoutube } from "react-icons/bs";

import { FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleHandler } from "../redux-store/ToggleSlice";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();

  const HandlerClick = () => {
    dispatch(toggleHandler());
  };
  return (
    <div className="flex items-center flex-row w-auto g-12 mt-4">
      <button onClick={HandlerClick}>
        <RxHamburgerMenu className="w-10 h-10 mx-4" />
      </button>

      <div className="flex items-center basis-1/4">
        <Link to="/">
          {" "}
          <BsYoutube className="w-10 h-10 mx-2 text-red-600" />{" "}
        </Link>
        YouTube
      </div>

      <SearchBar />
      <div className="basis-1/4 flex flex-row g-4 items-center">
        <FaUserCircle className="w-12 h-8 " />
        <p>Dinesh Sai</p>
      </div>
    </div>
  );
}

export default Header;
