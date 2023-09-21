import React from 'react'
import { Link } from 'react-router-dom'

export default function A_propos () {
  return (
    <main class='a-propos'>
      <section>
        <h1>À propos</h1>
        <div class='carre-contenu'>
          <p>
            Photographe depuis plus de 5 ans, je réalise des reportages aux
            photos dynamiques et pertinentes pour vos projets de communication.
            Créativité, qualité, et sérénité pour vous! Je gère tout, depuis la
            direction artistique, la réalisation du reportage jusqu’à la
            livraison de vos photos retouchées, prêtes à l’emploi.
          </p>
          <h2>Services</h2>
          <ul>
            <li>Portrait seul ou à plusieurs</li>
            <li>Shooting mode</li>
            <li>Retouches sur mesure</li>
            <li>Développement</li>
          </ul>
        </div>
        <div>
          <Link to='/Portfolio' class='cta'>
            VOIR MON PORTFOLIO
          </Link>
        </div>
      </section>
      <section class='section-tarifs'>
        <h2>Tarifs</h2>
        <div className='a-propos__responsive'>
          <table>
            <thead>
              <tr>
                <th>Désignation</th>
                <th>Quantité</th>
                <th>Prix</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Retouches photo studio professionnel</td>
                <td>x 800 photos</td>
                <td>3 200€/800 photos</td>
              </tr>
              <tr>
                <td>Assistant photo lumière professionnel</td>
                <td>x 2 sets studio</td>
                <td>1 500€/journée</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}
