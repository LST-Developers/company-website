import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div>
            <footer class="containerFooter">
                <div class="infoContact">
                    <div class="findUs">
                        <span class="material-icons-outlined">location_on</span>
                        <div>
                            <h4>Encuentranos</h4>
                            <p>calle #22-22</p>
                        </div>
                    </div>
                    <div class="findUs">
                        <span class="material-icons-outlined">
                            phone_enabled
                        </span>
                        <div>
                            <h4>Contactanos</h4>
                            <p>+57 - 3232233233</p>
                        </div>
                    </div>
                    <div class="findUs">
                        <span class="material-icons-outlined">mail</span>
                        <div>
                            <h4>Correo</h4>
                            <p>usuario@loquesea</p>
                        </div>
                    </div>
                </div>
                <div class="infoUseful">
                    <div class="infogeneral">
                        <div class="logosRedes">
                            <img
                                src="https://thumbs.dreamstime.com/b/letter-lst-simple-monogram-logo-icon-design-initial-vector-illustration-203570670.jpg"
                                alt="logo del equipo"
                                width="50"
                                height="50"
                                className="logo"
                            />
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Illum saepe eveniet rem magni
                                iure!
                            </p>
                            <p>Síguenos</p>
                            <div>
                                <a href="DiderccionDeFacebookDeLaEmpresa">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href="DiderccionDeInstagramDeLaEmpresa">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="usefulLinks">
                        <p>Enlaces de interés</p>
                        <ul>
                            <li>
                                <a href="#">Inicio</a>
                            </li>
                            <li>
                                <a href="#">Servicios</a>
                            </li>
                            <li>
                                <a href="#">Contactanos</a>
                            </li>
                            <li>
                                <a href="#">Acerca De</a>
                            </li>
                        </ul>
                    </div>
                    <div class="subscribe">
                        <p>Subscríbete</p>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Ingrese su correo electrónico"
                        />
                        <span class="material-icons-outlined">send</span>
                    </div>
                </div>
                <div class="infoLegal">
                    <p>
                        Copyright © 2023 My Website CV y Robate algo para que
                        veas
                    </p>
                    <a href="#">Política</a>
                    <p></p>
                    <a href="#">Inicio</a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
