import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";


const Body = () =>{
    const toggle =useSelector((store)=>store.app.isMenuOpen);
    return (
        <div className="flex">
            {
                toggle && <SideBar/>
            }
            <Outlet/>
        </div>
    )
}

export default Body;