import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-sm navbar-light bg-warning d-flex justify-content-between px-4'>
        <NavLink to='/' className='navbar-brand'>Pokédex</NavLink>
        <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
          <li className='nav-item px-2'>
            <NavLink className='nav-link' to='/'>Home</NavLink>
          </li>
          <li className='nav-item px-2'>
            <NavLink className='nav-link' to='/about'>Acerca de Pokémon</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default Navbar;
