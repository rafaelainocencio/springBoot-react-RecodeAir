import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <Link to="/">
                <button className="navbar-brand">RecodeAir</button>
            </Link>
            <div className='opcoes'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <Link to="/destinos">
                            <button className="nav-item nav-link">Destinos</button>
                        </Link>

                        {/* <Link to="/sobre">
                        <a className="nav-item nav-link">Sobre nós</a>
                        </Link> */}
                        
                        <Link to="/form">
                            <button className="nav-item nav-link">CRUD</button>
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;