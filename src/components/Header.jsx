import { React, useState, useEffect } from "react";
import logoBgBlack from  "../assets/img/logoBgBlack.png";
import logoBgWhite from  "../assets/img/logoBgWhite.png";
function Header() {
    const [headerColor, setHeaderColor] = useState("transparent");
    const [color, setColor] = useState("white");
    const routes=[
        "Inicio",
        "Servicios",
        "Sobre Nosotros",
        "Contáctanos",
    ]
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [logo, setLogo] = useState(logoBgBlack);

    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 0) {
                setHeaderColor("white"); // Si hay scroll, cambia el color del header
                setColor("black");
                setLogo(logoBgWhite);
            } else {
                setHeaderColor("transparent"); // Si no hay scroll, establece el color transparente
                setColor("white");
                setLogo(logoBgBlack);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile ? (
                <div className="header">
                    <img
                        src={logo}
                        alt="logo del equipo"
                        width="50"
                        height="50"
                        className="logo"
                    />
                    <ul className={`navBar ${isOpen ? "open" : ""}`}>
                        {routes.map((route,index) => {
                            return (
                                <li key={index}>
                                    <a href="#" style={{ color: "black" }}>
                                        {route}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
                        <span className="material-icons-outlined">
                            {!isOpen ? "menu" : "close"}
                        </span>
                    </div>
                    <div className="userOption">
                        <span className="material-icons-outlined">search</span>
                        <span className="material-icons-outlined">
                            account_circle
                        </span>
                        <span className="userName">Nombre de Usuario</span>
                        <span className="material-icons-outlined">logout</span>
                    </div>
                </div>
            ) : (
                <div
                    className="header"
                    style={{ backgroundColor: headerColor, color: color }}
                >
                    <img
                        src={logo}
                        alt="logo del equipo"
                        width="50"
                        height="50"
                        className="logo"
                    />
                    <ul className={`navBar ${isOpen ? "open" : ""}`}>
                        {routes.map((route,index) => {
                            return (
                                <li key={index}>
                                    <a href="#" style={{ color: color }}>
                                        {route}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
                        <span className="material-icons-outlined">
                            {!isOpen ? "menu" : "close"}
                        </span>
                    </div>
                    <div className="userOption">
                        <span className="material-icons-outlined">search</span>
                        <span className="material-icons-outlined">
                            account_circle
                        </span>
                        <span className="userName">Nombre de Usuario</span>
                        <span className="material-icons-outlined">logout</span>
                    </div>
                </div>
            )}
        </div>
    );
}
export default Header;
