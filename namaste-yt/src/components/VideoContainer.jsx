import { useEffect, useState } from "react";
import { Youtube_APi } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () =>{

    const [videos,setVideos]=useState([]);

    // console.log(videos);
    useEffect(()=>{
        getVideos();
    },[])

    const getVideos = async ()=>{
        const data= await fetch(Youtube_APi);
        const json=await data.json();
        setVideos(json.items);
        
    }

    return (
        <div className="flex flex-wrap">
           
           {
            videos.map((video)=><Link key={video.id} to={"/watch?v=" + video.id}><VideoCard  info={video}/></Link>)
           }
        </div>
    )
}

export default VideoContainer;