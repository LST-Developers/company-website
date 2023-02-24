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

    return (
        <div
            className="header"
            style={{ backgroundColor: headerColor, color: color }}
        >
            <a href="#">
                <img
                    src="https://thumbs.dreamstime.com/b/letter-lst-simple-monogram-logo-icon-design-initial-vector-illustration-203570670.jpg"
                    alt="logo del equipo"
                    width="50"
                    height="50"
                    className="logo"
                />
            </a>
            <ul className="navBar">
                {routes.map((route, index) => {
                    return (
                        <li key={index}>
                            <a href="#" style={{ color: color }}>
                                {route}
                            </a>
                        </li>
                    );
                })}
                <span className="material-icons-outlined">search</span>
            </ul>
            <div className="userOption">
                <span className="material-icons-outlined">account_circle</span>
                <span className="userName">Nombre de Usuario</span>
                <span className="material-icons-outlined">logout</span>
            </div>
        </div>
    );
}
export default Header;