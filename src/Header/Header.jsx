import React from 'react'
import './Header.css'
import logo from '../../src/assets/logo.png'
import Bars from '../../src/assets/bars.png'
import { useState } from 'react'
import {Link} from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth<=768 ?
  true: false;
  const[menuOpened , setMenuOpened] = useState(false)
  return (
    <div className='header'>
     <img src={logo} alt="" className='logo' />
     {(menuOpened===false&& mobile ===true) ? (
      <div
      style={{
        backgroundColor:"var(--appColor)",
        padding:"0.5rem",
        borderRadius:"5px",
      }}
      onClick={()=>setMenuOpened(true)}
       >
        <img src={Bars} alt="" 
      style={{width:'1.5rem ', height:'1.5rem'}}
      /></div>

     ):  (
      <ul className='header-menu'>
     <li >
      <Link
      onClick={()=>setMenuOpened(false)}
      to='home'
      span={true}
      smooth={true}
      >home</Link>
      </li>


     <li > <Link
      onClick={()=>setMenuOpened(false)}
      to='programs'
      span={true}
      smooth={true}
      >programs</Link></li>


<li > <Link
      onClick={()=>setMenuOpened(false)}
      to='reasons'
      span={true}
      smooth={true}
      >reasons</Link></li>



<li > <Link
      onClick={()=>setMenuOpened(false)}
      to='plans'
      span={true}
      smooth={true}
      >plans</Link></li>


     <li ><Link 
     onClick={()=>setMenuOpened(false)}
    to='Testimoials'
    span={true}
    smooth={true}
     >testimonials</Link></li>
  </ul>
  )}
     
    </div>
  );
};

export default Header
