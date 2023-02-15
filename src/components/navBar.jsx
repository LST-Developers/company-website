import React from 'react';
function NavBar() {
  return (
    <div>
      <div class="container_barra_de_navegacion">
        <nav>
            <ul class="barra_de_navegacion">
                <img src="https://thumbs.dreamstime.com/b/letter-lst-simple-monogram-logo-icon-design-initial-vector-illustration-203570670.jpg" alt="logo del equipo" width="50" height="50"/>
                <li><a href="">Inicio</a></li>
                <li><a href="">Servicios</a></li>
                <li><a href="">Sobre Nosotros</a></li>
                <li><a href="">Contactanos</a></li>
                <img src="https://assets.stickpng.com/images/59cfc4d2d3b1936210a5ddc7.png" alt="icono buscar" width="40"height="40" />
                <img src="https://assets.stickpng.com/images/585e4be1cb11b227491c3398.png" alt="icono de usuario" width="40" height="40" />
                <li><a href="">Nombre de Usuario</a></li>
                <img src="https://static.vecteezy.com/system/resources/thumbnails/000/575/331/small/vector60-5811-01.jpg" alt="icono de loguin" width="50" height="50"/>
            </ul>
        </nav>
        </div>  
    </div>
  );
}
export default NavBar;
