import { Link } from "react-router-dom";

const SideBar = () =>{
    return (
        <div className="p-5 shadow-2xl w-[12rem]">

            <ul>             
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
           </ul>


           
            <h1 className="font-bold pt-5">Subscriptions</h1>
           <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
           </ul>


           <h1 className="font-bold pt-5">Watch Later</h1>
           <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
           </ul>
        </div>
    )
}

export default SideBar;