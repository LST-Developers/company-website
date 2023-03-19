import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/img/logoBgBlack.png"
function Footer() {
    return (
        <footer>
            <div className="containerFooter">
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
                    <div className="contactUs">
                        <span className="material-icons-outlined">
                            phone_enabled
                        </span>
                        <div>
                            <h4>Contáctanos</h4>
                            <p>+57 - 323-223-2323</p>
                        </div>
                    </div>
                    <div className="emailUs">
                        <span className="material-icons-outlined">mail</span>
                        <div>
                            <h4>Correo</h4>
                            <p>usuario@ejemplo.com</p>
                        </div>
                    </div>
                </div>
                <hr className="longLine" />
                <div className="infoUseful">
                    <div className="infogeneral">
                        <img
                            src= {logo}
                            alt="logo del equipo"
                            className="logo"
                        />
                        <p>
                            LSTech es una empresa de desarrollo web altamente
                            creativa y dinámica, comprometida con la creación de
                            sitios web excepcionales y soluciones digitales
                            personalizadas para empresas y organizaciones. {/* Nos
                            apasiona ayudar a nuestros clientes a alcanzar sus
                            objetivos en línea, ya sea mediante la creación de
                            sitios web de alto rendimiento, la optimización para
                            motores de búsqueda, o el diseño y desarrollo de
                            aplicaciones web. */}
                        </p>
                        <h4>Síguenos</h4>
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
                    <div className="usefulLinks">
                        <h4>Enlaces de interés</h4>
                        <hr className="shortLine" />
                        <ul>
                            <li>
                                <a className="linksUtil" href="#">
                                    Inicio
                                </a>
                            </li>
                            <br />
                            <li>
                                <a className="linksUtil" href="#">
                                    Servicios
                                </a>
                            </li>
                            <br />
                            <li>
                                <a className="linksUtil" href="#">
                                    Sobre Nosotros
                                </a>
                            </li>
                            <br />
                            <li>
                                <a className="linksUtil" href="#">
                                    Contactanos
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="subscribe">
                        <h4>Subscríbete</h4>
                        <hr className="shortLine" />
                        <p>
                            Suscríbete ingresando su correo para mantenerlo
                            actualizado de nuestras ofertas y brindarles nuestra
                            mejor atención.
                        </p>
                        <div className="containerEmail">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Ingrese su correo electrónico"
                            />
                            <a href="">
                                <span className="material-icons-outlined">
                                    send
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="infoLegal">
                    <p>
                        Copyright © 2023 LSTech, Todos los derechos
                        reservados. Hecho en [Santa Marta, Colombia].
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
