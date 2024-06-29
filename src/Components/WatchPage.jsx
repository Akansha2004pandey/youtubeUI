import React from 'react'
import { useEffect } from 'react';
import {useDispatch} from "react-redux";
import {closeMenu} from "../utils/slice"
import { useSearchParams } from "react-router-dom";
import Comments from './Comments';
import Livechat from './Livechat';
const WatchPage = () => {
  //const params=useParams();
  //we need to import useSearch
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('v'));
  
  const dispatch=useDispatch();
  useEffect(()=>{
         dispatch(closeMenu());
  },[])
  return (
    <div className='flex flex-col w-full'>
    <div className="px-5 flex w-full">
      <div>
      <iframe width="600" height="400" src={"https://www.youtube.com/embed/"+ searchParams.get('v')} title="Salt Smacks 45 &amp; Rauf Claims 3-Fer | Highlights - England v Pakistan | 4th Men’s Vitality IT20 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="w-full">
          <Livechat />
        </div>
    </div>
    
    <Comments/>
    </div>
  )
}

export default WatchPage;
