import React from 'react'
import { useEffect } from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom"
import { toggleMenu } from '../utils/slice';


const Sidebar = () => {
  const Menu=useSelector((store)=>store.app.isMenuOpen);
  if(!Menu) return <div></div>;
  return (
    <div className='p-5 shadow-lg  w-48'>
        <ul>
        <Link to="/">Home</Link>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li></li>
       </ul>
       <h1 className='font-bold'>Subscription</h1>
       <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li></li>
       </ul>
       <h1 className='font-bold pt-5' >Watch Later</h1>
       <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li></li>
       </ul>
    </div>
  )
}

export default Sidebar;
