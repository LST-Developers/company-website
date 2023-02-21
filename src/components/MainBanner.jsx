import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
function MainBanner() {

    const el = useRef(null);
    // Create reference to store the Typed instance itself
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                'Empresa de Desarrollo Web',
                'Comercio Electronico',
                'Paginas web a la medida de tu empresa'
            ],
            typeSpeed: 40,
            backSpeed: 50,
            backDelay: 1000,
            startDelay: 1000,
            loop:true
        };

        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);

        return () => {
            // Make sure to destroy Typed instance during cleanup
            // to prevent memory leaks
            typed.current.destroy();
        }
    }, [])

    return (
        <div className="mainContainer">
            <div className="mainText">
                <h2 className="titulo">Bienvenidos a LST Tecnology</h2>
                <div className="type-wrap">
                <span style={{ whiteSpace: 'pre' }} ref={el} />
                </div>
                <p>Somos una empresa de desarrollo web enfocada en el comercio electronico</p>

                <div className="buttons">
                    <button id="btn1">Sobre Nosotros</button>
                    <button id="btn2">Contáctanos</button>
                </div>


            </div>
        </div>
    )
}

export default MainBanner;