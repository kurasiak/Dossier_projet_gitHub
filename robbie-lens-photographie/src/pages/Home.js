import React from 'react'
import { Link } from 'react-router-dom'

import robbieLens from '../assets/images/accueil/robbie-lens.png'
import e1 from '../assets/images/accueil/element-1.png'
import e2 from '../assets/images/accueil/element-2.png'
import e3 from '../assets/images/accueil/element-3.png'
import e4 from '../assets/images/accueil/element-4.png'
import e5 from '../assets/images/accueil/element-5.png'
import e6 from '../assets/images/accueil/element-6.png'

export default function Home () {
  return (
    <main className='mainHome'>
      <section className='accueil-introduction'>
        <div>
          <h1>Robbie Lens Photographie</h1>
          <p>
            Où <em>professionalisme</em> s’allie avec <em>passion</em>. Depuis
            plus de 5 ans maintenant, j’exerce mon métier avec la passion qui
            m’anime : capturer l’essence de chaque instant.
          </p>
          <Link to='/Portfolio' className='cta'>
            UN PROJET ? ÉCRIVEZ-MOI
          </Link>
        </div>
        <img
          src={robbieLens}
          alt='Portrait avec effet de la photographe Robbie Lens'
        />
      </section>
      <section className='accueil-photos'>
        <h2>Mon dernier projet</h2>
        <div>
          <img src={e1} alt='Twelve apostles - Australie' />
          <img src={e2} alt='Wai-O-Tapu - Nouvelle-Zélande' />
          <img src={e3} alt='Parc National d’Abel Tasman - Nouvelle-Zélande' />
        </div>
        <div>
          <img src={e4} alt='Lac Rotorua - Nouvelle-Zélande' />
          <img src={e5} alt='Milford Sound - Nouvelle-Zélande' />
          <img src={e6} alt='Lac Wanaka - Nouvelle-Zélande' />
        </div>
      </section>
      <section id='contact' class='section-contact'>
        <h2>Parlons de votre projet</h2>
        <form method='get' action=''>
          <div class='form-nom-email'>
            <div class='form-column'>
              <label for='nom'>nom</label>
              <input type='text' name='nom' id='nom' />
            </div>
            <div class='form-column'>
              <label for='email'>email</label>
              <input type='e-mail' name='email' id='email' />
            </div>
          </div>
          <label for='message'>message</label>
          <textarea name='message' id='message' rows='10' />
          <input type='submit' value='ENVOYER' class='cta' />
        </form>
      </section>
    </main>
  )
}
