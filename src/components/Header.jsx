import { React, useState, useEffect } from "react";
function Header() {
    const [headerColor, setHeaderColor] = useState("transparent");
    const [color, setColor] = useState("white");
    const [routes, setRoutes] = useState([
        "Inicio",
        "Servicios",
        "Sobre Nosotros",
        "Contáctanos",
    ]);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.pageYOffset > 0) {
                setHeaderColor("white"); // Si hay scroll, cambia el color del header
                setColor("black");
            } else {
                setHeaderColor("transparent"); // Si no hay scroll, establece el color transparente
                setColor("white");
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
                        src="https://thumbs.dreamstime.com/b/letter-lst-simple-monogram-logo-icon-design-initial-vector-illustration-203570670.jpg"
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
                        src="https://thumbs.dreamstime.com/b/letter-lst-simple-monogram-logo-icon-design-initial-vector-illustration-203570670.jpg"
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
