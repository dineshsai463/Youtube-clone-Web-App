import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function Body() {

  return (
    <>   
    <Header/>
    <div className="flex mt-2 w-auto justify-center">
      <SideBar />
      {<Outlet />}
    </div>
    </>
  );
}

export default Body;
