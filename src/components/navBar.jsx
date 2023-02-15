import React from 'react';
function NavBar() {
  return (
    <div>
      <div class="containerNavBar">
        <nav>
              <a href="#"><img src="https://thumbs.dreamstime.com/b/letter-lst-simple-monogram-logo-icon-design-initial-vector-illustration-203570670.jpg" alt="logo del equipo" width="50" height="50"/></a>
                <ul class="navBar">    
                  <li><a href="#">Inicio</a></li>
                  <li><a href="#">Servicios</a></li>
                  <li><a href="#">Sobre Nosotros</a></li>
                  <li><a href="#">Contactanos</a></li>
                </ul>
                <span class="material-icons-outlined">search</span>
                <div class="userOption">
                 <span class="material-icons-outlined">account_circle</span>
                  <span>Nobre de Usuario</span>
                  <span class="material-icons-outlined">logout</span>
                </div>         
      </nav>
        </div>  
    </div>
  );
}
export default NavBar;
