import React from "react";
import "./MainBanner.css";

function MainBanner (){
    return (
        <div className="header">
            
            <div className="mainConteiner">
                <h2 className="titulo">Bienvenidos a LTS Tecnology</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis optio ad amet</p>
               
                <div className="buttons">
                    <button id="btn1">Sobre Nostros</button>
                    <button id="btn2">Sobre Nostros2</button>
                </div>

    
            </div>
        </div>
    )
}

export default MainBanner;