import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome, FaPlus, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
const Navbar = () => {


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
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink className={''} to={"/"}> <FaHome/> Home </NavLink></li>
      <li><NavLink to={"/wwcd"}> WWCD  </NavLink></li>
      <li><NavLink to={"/addteams"}> <FaPlus/> Add Teams  </NavLink></li>
        <li>
          <a> Dropdown </a>
          <ul className="p-2">
            <li><Link>Submenu 1</Link></li>
            <li><Link>Submenu 2</Link></li>
          </ul>
        </li>
        <li><button> <FaSignOutAlt/> Logout </button></li>
      </ul>
    </div>
    <Link to={'/'} className="btn btn-ghost normal-case text-xl"> <img className='w-14 h-14 ' src='https://media.discordapp.net/attachments/901337110995410965/1045774899098177607/tie2_png.png?width=552&height=552'/> </Link>
  </div>

  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink className={'navlink-style'} to={"/"}> <FaHome/> Home </NavLink></li>
    <li><NavLink className={'navlink-style'} to={"/wwcd"}> WWCD  </NavLink></li>
    <li><NavLink className={'navlink-style'} to={"/addteams"}> <FaPlus/> Add Teams  </NavLink></li> <li tabIndex={0}>
        <details>
          <summary className={'navlink-style '}> Dropdown </summary>
          <ul className="px-2 py-0  text-slate-50 bg-slate-800 rounded-bl-md rounded-br-md rounded-t-none  ">
            <li className=' border-solid  border-t-2 border-t-gray-600 '><Link className='hover:text-yellow-400'> <FaPlus/> STANDING</Link></li>
            <li className='border-solid  border-t-2 border-t-gray-600'><Link className='hover:text-yellow-400'> <FaPlus/> Top Fragger</Link></li>
            <li className='border-solid  border-t-2 border-t-gray-600'><Link className='hover:text-yellow-400'> <FaPlus/> MVP</Link></li>
            <li className='border-solid  border-t-2 border-t-gray-600'><Link className='hover:text-yellow-400'> <FaPlus/> Display </Link></li>
            <li className='border-solid  border-t-2 border-t-gray-600'><Link className='hover:text-yellow-400'> <FaPlus/> SCHEDULE </Link></li>
            <li className='border-solid  border-t-2 border-t-gray-600'><Link className='hover:text-yellow-400'> <FaPlus/> Next </Link></li>
            <li className='border-solid  border-t-2 border-t-gray-600'><Link className='hover:text-yellow-400'> <FaPlus/> OverAll </Link></li>
            <li className='border-solid  border-t-2 border-t-gray-600'><Link className='hover:text-yellow-400'> <FaPlus/> OverAll MVP </Link></li>
            <li className='border-solid  border-t-2 border-t-gray-600'><Link className='hover:text-yellow-400'> <FaPlus/> Overall Standing </Link></li>
          </ul>
        </details>
      </li>
      <li><button className={'navlink-style'}> <FaSignOutAlt/> Logout </button></li>
    </ul>
  </div>
 
  </div>
    );
};

export default Navbar;