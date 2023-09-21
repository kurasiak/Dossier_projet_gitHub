import React from 'react'

import pa1 from '../assets/images/portfolio/paysage1.jpg'
import pa2 from '../assets/images/portfolio/paysage2.jpg'
import pa3 from '../assets/images/portfolio/paysage3.jpg'
import pa4 from '../assets/images/portfolio/paysage4.jpg'
import pa5 from '../assets/images/portfolio/paysage5.jpg'
import pa6 from '../assets/images/portfolio/paysage6.jpg'
import pa7 from '../assets/images/portfolio/paysage7.jpg'
import pa8 from '../assets/images/portfolio/paysage8.jpg'
import pa9 from '../assets/images/portfolio/paysage9.jpg'
import po1 from '../assets/images/portfolio/portrait1.jpg'
import po2 from '../assets/images/portfolio/portrait2.jpg'
import po3 from '../assets/images/portfolio/portrait3.jpg'
import po4 from '../assets/images/portfolio/portrait4.jpg'
import po5 from '../assets/images/portfolio/portrait5.jpg'
import po6 from '../assets/images/portfolio/portrait6.jpg'

export default function Portfolio () {
  return (
    <main className='mainPortfolio'>
      <section>
        <h1>Portfolio</h1>
      </section>
      <section class='portfolio-section-photos'>
        <h2>Paysages</h2>
        <div class='grid-paysages'>
          <a href={pa1} class='lien-conteneur-photo'>
            <img src={pa1} alt='Mont Aoraki - Nouvelle-Zélande' />
            <div class='photo-hover'>Voir la photo</div>
          </a>
          <a href={pa2} class='lien-conteneur-photo'>
            <img
              src={pa2}
              alt='Parc National d’Abel Tasman - Nouvelle-Zélande'
            />
            <div class='photo-hover'>Voir la photo</div>
          </a>
          <a href={pa3} class='lien-conteneur-photo'>
            <img src={pa3} alt='Lac Rotorua - Nouvelle-Zélande' />
            <div class='photo-hover'>Voir la photo</div>
          </a>
          <a href={pa4} class='lien-conteneur-photo'>
            <img src={pa4} alt='Lac Wanaka - Nouvelle-Zélande' />
            <div class='photo-hover'>Voir la photo</div>
          </a>
          <a href={pa5} class='lien-conteneur-photo'>
            <img src={pa5} alt='Mont Taranaki - Nouvelle-Zélande' />
            <div class='photo-hover'>Voir la photo</div>
          </a>
          <a href={pa6} class='lien-conteneur-photo'>
            <img src={pa6} alt='Milford Sound - Nouvelle-Zélande' />
            <div class='photo-hover'>Voir la photo</div>
          </a>
          <a href={pa7} class='lien-conteneur-photo'>
            <img src={pa7} alt='Twelve Apostle - Australie' />
            <div class='photo-hover'>Voir la photo</div>
          </a>
          <a href={pa8} class='lien-conteneur-photo'>
            <img src={pa8} alt='Wai-O-Tapu - Nouvelle-Zélande' />
            <div class='photo-hover'>Voir la photo</div>
          </a>
          <a href={pa9} class='lien-conteneur-photo'>
            <img src={pa9} alt='Mont Cook - Nouvelle Zélande' />
            <div class='photo-hover'>Voir la photo</div>
          </a>
        </div>
        <h2>Portraits</h2>
        <div class='grid-portraits'>
          <a href={po1} class='lien-conteneur-photo'>
            <img src={po1} alt='Portrait jeune femme 1' />
            <div class='photo-hover'>Voir la photo</div>
          </a>
          <a href={po2} class='lien-conteneur-photo'>
            <img src={po2} alt='Portrait jeune femme 2' />
            <div class='photo-hover'>Voir la photo</div>
          </a>
          <a href={po3} class='lien-conteneur-photo'>
            <img src={po3} alt='Portrait jeune homme 3' />
            <div class='photo-hover'>Voir la photo</div>
          </a>
          <a href={po4} class='lien-conteneur-photo'>
            <img src={po4} alt='Portrait jeune femme 4' />
            <div class='photo-hover'>Voir la photo</div>
          </a>
          <a href={po5} class='lien-conteneur-photo'>
            <img src={po5} alt='Portrait jeune femme 5' />
            <div class='photo-hover'>Voir la photo</div>
          </a>
          <a href={po6} class='lien-conteneur-photo'>
            <img src={po6} alt='Portrait jeune femme 6' />
            <div class='photo-hover'>Voir la photo</div>
          </a>
        </div>
      </section>
    </main>
  )
}
