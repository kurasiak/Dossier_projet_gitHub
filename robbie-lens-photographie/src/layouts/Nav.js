import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../assets/images/hearder-nav-footer/logo.png'

export default function Nav () {
  return (
    <nav className='navBar'>
      <img src={logo} alt='Logo Robbie Lens' />
      <div>
        <NavLink className='anchore anchore--purple' to='/'>
          Accueil
        </NavLink>
        <NavLink className='anchore anchore--purple' to='/A_propos'>
          À propos
        </NavLink>
        <NavLink className='anchore anchore--purple' to='/Portfolio'>
          Portfolio
        </NavLink>
      </div>
    </nav>
  )
}
