import React , {useState} from 'react'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const[menu,setMenu]=useState(false)

    const ShowLinksMobile=()=>{
        setMenu(!menu)
    }
  return (
   <nav>
       <div className='header' >
       <div className='logo-div'>
           <img src="/images/logo.svg" alt="" />
       </div>
       
       <ul className='nav-links'>
           <li> <a href="#">Home</a> </li>
           <li> <a href="#">What is GPT3?</a> </li>
           <li> <a href="#">Open Ai</a> </li>
           <li> <a href="#">Case Studies</a> </li>
           <li> <a href="#">Library</a> </li>
       </ul>
       <div className='sign-div'>
           <h3>Sign in</h3>
           <button type='button'> Sign up</button>
       </div>

       <div className='menu-div'>
            {menu ? <FaTimes className='icon' onClick={ShowLinksMobile} /> : <FaBars className='icon' onClick={ShowLinksMobile}/> }
           
           {menu && (
               <div className='links-sign-mobile scale-up-center' >
                   <ul className='nav-links-mobile'>
           <li> <a href="#">Home</a> </li>
           <li> <a href="#wgpt3">What is GPT3?</a> </li>
           <li> <a href="#">Open Ai</a> </li>
           <li> <a href="#blog">Case Studies</a> </li>
           <li> <a href="#">Library</a> </li>
       </ul>
       <div className='sign-div-mobile'>
           <h3>Sign in</h3>
           <button type='button'> Sign up</button>
       </div>
               </div>
           )}
       </div>

      

       </div>
   </nav>
  )
}

export default Navbar