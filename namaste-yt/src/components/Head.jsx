import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";

const Head = () =>{

    const dispatch =useDispatch();

    const toggleMenuHandler =  ()=>{
        dispatch(toogleMenu());
    }

   
    return (
        <div className="grid grid-flow-col p-5 m-2 shadow-2xl">

        {/* This is youtube logo and hamburger menu */}
        <div className="flex col-span-1 ">
            <img onClick={toggleMenuHandler} className="h-8 cursor-pointer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png" alt="Menu" />
         <a href="">  <img className="h-8 mx-2" src="https://cdn.worldvectorlogo.com/logos/youtube-6.svg" alt="Youtube Logo" /></a> 
        </div>


        {/* This is youtube search bar */}
        <div className="col-span-10 px-10">
            <input className="w-1/2 border border-gray-400 p-2 rounded-l-full" type="text" />
            <button className="border border-gray-400 p-2 rounded-r-full px-5 bg-gray-100">🔎</button>
        </div>


        {/* This is user icon */}
        <div className="col-span-1">
            <img className="h-8" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
        </div>
    </div>
    )
}

export default Head;