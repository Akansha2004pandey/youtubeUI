import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet;
   
    console.log("hello");
    console.log(info);
  return (
    <div className='p-2 m-2 w-72 shadow-xl'>
       <img src={thumbnails.medium.url} className='rounded-md' alt="" />
       <ul>
          
         
          <li className='font-bold'>{title}</li>
          <li>{channelTitle}</li>
          <li>{Math.floor(statistics.viewCount/1000000)}M views</li>
       </ul>
    </div>
  )
}
export const AdVideoCard=({info})=>{
  return (<div className='p-1 m-1 border border-red-400'>
     <VideoCard info={info}/>
  </div>);

}

export default VideoCard;

