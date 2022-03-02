import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <Link to="/">
                <a className="navbar-brand">RecodeAir</a>
            </Link>
            <div className='opcoes'>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/destinos">
                            <a className="nav-item nav-link">Destinos</a>
                        </Link>
                        <a className="nav-item nav-link">Sobre nós</a>
                        <Link to="/form">
                            <a className="nav-item nav-link">CRUD</a>
                        </Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;