import React from 'react'

import logo from '../assets/images/hearder-nav-footer/logo.png'
import twitter from '../assets/images/hearder-nav-footer/twitter.png'
import instagram from '../assets/images/hearder-nav-footer/instagram.png'

export default function Footer () {
  return (
    <footer>
      <img src={logo} alt='Logo Robbie Lens' />
      <div>
        <a
          target='_blank'
          href='https://twitter.com/'
          class='lien-icone'
          rel='noopener noreferrer'
        >
          <img src={twitter} alt='Logo Twitter' />
        </a>
        <a
          target='_blank'
          href='https://www.instagram.com/'
          class='lien-icone'
          rel='noopener noreferrer'
        >
          <img src={instagram} alt='Logo Instagram' />
        </a>
      </div>
    </footer>
  )
}
