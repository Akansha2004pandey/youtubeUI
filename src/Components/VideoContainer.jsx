import React, {useEffect,useState} from 'react'
import {videoApi} from '../utils/Constants'
import { Link } from 'react-router-dom';
import VideoCard,{AdVideoCard} from './VideoCard';
const VideoContainer = () => {
    const [videos,setVideos]=useState(null);
    useEffect(()=>{
            getVideos();
    },[])
const getVideos=async ()=>{
    const data=await fetch(videoApi);
    const json=await data.json();
    console.log(json);
    setVideos(json.items);
}
  return videos==null ? <div></div>:(
    <div className='flex flex-wrap'>
      {videos[0] && <AdVideoCard info={videos[0]}/>}
      {videos.map(video=>
      <Link to={"/watch/?v="+video.id} ><VideoCard key={video.id} info={video}/></Link>)}
      
    </div>
  )
}

export default VideoContainer;
