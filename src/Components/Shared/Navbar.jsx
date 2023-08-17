import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaDesktop, FaHome, FaPlus, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { AuthContext } from '../../Context/AuthProvider';
const Navbar = () => {

const {user,LogOutUser }=useContext(AuthContext)

const signOut = () => {
  LogOutUser ()
  .then(() => { })
  .catch(err => console.log(err));
};




    const menu = <>
    <li><NavLink className={''} to={"/home"}> <FaHome/> Home </NavLink></li>
    <li><NavLink to={"/wwcd"}> WWCD  </NavLink></li>
    <li><NavLink to={"/addteams"}> <FaPlus/> Add Teams  </NavLink></li>
    <li><button> <FaSignOutAlt/> Logout    </button></li>
    {/* <li><button> <FaSignInAlt/> Login     </button></li> */}
    </>

    return (
      <div className="navbar bg-slate-800 text-white sticky top-0 z-10" >
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-800 rounded-box w-52">
      <li><NavLink className={'navlink-style'} to={"/"}> <FaHome/> Home </NavLink></li>
    <li><NavLink className={'navlink-style'} to={"/wwcd"}> WWCD  </NavLink></li>
    <li><NavLink className={'navlink-style'} to={"/display"}> <FaDesktop/> Display  </NavLink></li>
    <li><NavLink className={'navlink-style'} to={"/addteams"}> <FaPlus/> Add Teams  </NavLink></li>
      
      <li><button className={'navlink-style'}> <FaSignOutAlt/> Logout </button></li>
      <li><NavLink className={'navlink-style'} to={'/signup'}> <FaSignOutAlt/> Signup </NavLink></li>
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost normal-case text-xl"> <img className='w-14 h-14 ' src='https://media.discordapp.net/attachments/901337110995410965/1045774899098177607/tie2_png.png?width=552&height=552'/> </Link>
  </div>

  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink className={'navlink-style'} to={"/"}> <FaHome/> Home </NavLink></li>
    <li><NavLink className={'navlink-style'} to={"/wwcd"}> WWCD  </NavLink></li>
    <li><NavLink className={'navlink-style'} to={"/display"}> <FaDesktop/> Display  </NavLink></li>
    <li><NavLink className={'navlink-style'} to={"/addteams"}> <FaPlus/> Add Teams  </NavLink></li>
      
     {   user?.email ? <li><button className={'navlink-style'}  onClick={signOut}> <FaSignOutAlt/> Logout </button></li> : <li><NavLink className={'navlink-style'} to={'/signup'}> <FaSignOutAlt/> Signup </NavLink></li> }
  
    </ul>
  </div>
 
  </div>
    );
};

export default Navbar;