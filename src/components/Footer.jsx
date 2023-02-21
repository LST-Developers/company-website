import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div>
            <footer className="containerFooter">
                <div className="infoContact">
                    <div className="findUs">
                        <span className="material-icons-outlined">
                            location_on
                        </span>
                        <div>
                            <h4>Encuéntranos</h4>
                            <p>calle #22-22</p>
                        </div>
                    </div>
                    <div className="findUs">
                        <span className="material-icons-outlined">
                            phone_enabled
                        </span>
                        <div>
                            <h4>Contáctanos</h4>
                            <p>+57 - 323-223-2323</p>
                        </div>
                    </div>
                    <div className="findUs">
                        <span className="material-icons-outlined">mail</span>
                        <div>
                            <h4>Correo</h4>
                            <p>usuario@loquesea</p>
                        </div>
                    </div>
                </div>
                <hr className="longLine" />
                <div className="infoUseful">
                    <div className="infogeneral">
                        <div className="logosRedes">
                            <img
                                src="https://thumbs.dreamstime.com/b/letter-lst-simple-monogram-logo-icon-design-initial-vector-illustration-203570670.jpg"
                                alt="logo del equipo"
                                width="50"
                                height="50"
                                className="logo"
                            />
                            <p>
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
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="usefulLinks">
                        <p>Enlaces de interés</p>
                        <hr className="shortLinea" />
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
