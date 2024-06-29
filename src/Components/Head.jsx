import React, { useEffect } from 'react'
import logo from '../images/logo.png'
import youtube from '../images/youtube.png'
import user from '../images/user.png'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {toggleMenu} from "../utils/slice"
import { youtube_search } from '../utils/Constants'
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
   const [searchQuery,setSearchQuery]=useState("");
   const [suggestions,setSuggestions]=useState([]);
   const [showSuggestions,setShowSuggestions]=useState(false);
   const searchCache=useSelector((store)=>store.search);
   
   console.log(searchQuery);
   const dispatch=useDispatch();
   const toggleMenuHandler=()=>{
      dispatch(toggleMenu());
   }
   useEffect(()=>{
         
        const Timer=setTimeout(()=>getSearchQuery()
         ,200);
        return ()=>{
         clearTimeout(Timer);
        }
   },[searchQuery])
   
   const getSearchQuery=async ()=>{
      const data=await fetch("https://corsproxy.io/?"+youtube_search+searchQuery);
      const response= await data.json();
      setSuggestions(response[1]);
      console.log(response);
      
      dispatch(
         cacheResults({
           [searchQuery]: response[1],
         })
       );
       
   }
  return (
  
    <div className='grid grid-flow-col p-4 m-2 shadow-lg'>
       <div className='flex col-span-1 justify-between'> 
       <img onClick={()=> toggleMenuHandler()} className='h-10 cursor-pointer' src={logo} alt="App Logo" />
       <img className='h-10 mx-2' src={youtube} alt="App Logo" />
             </div>
       <div className='col-span-10 px-10'>
         <div>
          <input type="text"  className='w-1/2 border border-gray-400 py-1 px-3 rounded-l-full'
           value={searchQuery} onChange={(e)=>{
              setSearchQuery(e.target.value)
           }}
           onFocus={()=>setShowSuggestions(true)}
           onBlur={()=>setShowSuggestions(false)} />
          <button className='border border-gray-400 py-1 px-2 rounded-r-full'>🔍</button>
          </div>
          {showSuggestions&& 
          <div className='absolute bg-white py-2 px-5 w-[27rem] rounded-md shadow-xl'>
            <ul>
               {suggestions.map((suggest)=><li key={suggest} className='pb-2'>{suggest}</li>)}

            </ul>
          </div>
}
       </div>
       <div className='col-span-1'>
          <img className='h-10' src={user} alt="user" />
       </div>
    </div>
   
  )
}

export default Head;
