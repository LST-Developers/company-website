import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
function Services() {
    
    return (
        <div className="containerServices">
            

            <div className="containerVideo">
                <ReactPlayer className="video"
                    url="https://www.youtube.com/embed/gPgMltxn-N4"
                    playing
                    loop
                    muted
                    controls={false}
                    width="100%"
                    height="100%"
                />
                <div className="backgroundOverlay">
                </div>
            </div>
            <div className="content">
                <div className="title">
                    <h2>NUESTROS SERVICIOS</h2>
                    <h5>
                        TE OFRECEMOS SIEMPRE LA MEJOR CALIDAD EN TODOS NUESTROS
                        SERVICIOS
                    </h5>
                </div>
                <div className="services">aquí van nuestros servicios</div>
            </div>
        </div>
    );
}

export default Services;
