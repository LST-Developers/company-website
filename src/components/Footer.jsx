import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div>
<<<<<<< HEAD
            <footer class="containerFooter">
                <div class="infoContact">
                    <div class="findUs">
                        <span class="material-icons-outlined">location_on</span>
=======
            <footer className="containerFooter">
                <div className="infoContact">
                    <div className="findUs">
                        <span className="material-icons-outlined">
                            location_on
                        </span>
>>>>>>> 4a8880ef894dc0f2f1e38fb1880dfd6f4c278b33
                        <div>
                            <h4>Encuentranos</h4>
                            <p>calle #22-22</p>
                        </div>
                    </div>
<<<<<<< HEAD
                    <div class="findUs">
                        <span class="material-icons-outlined">
=======
                    <div className="findUs">
                        <span className="material-icons-outlined">
>>>>>>> 4a8880ef894dc0f2f1e38fb1880dfd6f4c278b33
                            phone_enabled
                        </span>
                        <div>
                            <h4>Contactanos</h4>
<<<<<<< HEAD
                            <p>+57 - 3232233233</p>
                        </div>
                    </div>
                    <div class="findUs">
                        <span class="material-icons-outlined">mail</span>
=======
                            <p>+57 - 323-223-2323</p>
                        </div>
                    </div>
                    <div className="findUs">
                        <span className="material-icons-outlined">mail</span>
>>>>>>> 4a8880ef894dc0f2f1e38fb1880dfd6f4c278b33
                        <div>
                            <h4>Correo</h4>
                            <p>usuario@loquesea</p>
                        </div>
                    </div>
                </div>
<<<<<<< HEAD
                <div class="infoUseful">
                    <div class="infogeneral">
                        <div class="logosRedes">
=======
                <hr className="longLine" />
                <div className="infoUseful">
                    <div className="infogeneral">
                        <div className="logosRedes">
>>>>>>> 4a8880ef894dc0f2f1e38fb1880dfd6f4c278b33
                            <img
                                src="https://thumbs.dreamstime.com/b/letter-lst-simple-monogram-logo-icon-design-initial-vector-illustration-203570670.jpg"
                                alt="logo del equipo"
                                width="50"
                                height="50"
                                className="logo"
                            />
                            <p>
<<<<<<< HEAD
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
=======
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Cumque animi nemo aspernatur
                                beatae recusandae temporibus blanditiis? Cum
                                alias reiciendis quisquam.
                            </p>
                            <p>Síguenos</p>
                            <div className="iconRedes">
                                <a
                                    href="DiderccionDeFacebookDeLaEmpresa"
                                    className="iconFace"
                                >
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a
                                    href="DiderccionDeInstagramDeLaEmpresa"
                                    className="iconInstagram"
                                >
>>>>>>> 4a8880ef894dc0f2f1e38fb1880dfd6f4c278b33
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                    </div>
<<<<<<< HEAD
                    <div class="usefulLinks">
                        <p>Enlaces de interés</p>
=======
                    <div className="usefulLinks">
                        <p>Enlaces de interés</p>
                        <hr className="shortLinea" />
>>>>>>> 4a8880ef894dc0f2f1e38fb1880dfd6f4c278b33
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
<<<<<<< HEAD
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
=======
                    <div className="subscribe">
                        <p>Subscríbete</p>
                        <hr className="shortLinea" />
                        <div className="containerEmail">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Ingrese su correo electrónico"
                            />
                            <span className="material-icons-outlined">
                                send
                            </span>
                        </div>
                    </div>
                </div>
                <div className="infoLegal">
>>>>>>> 4a8880ef894dc0f2f1e38fb1880dfd6f4c278b33
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
