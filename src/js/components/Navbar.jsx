import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav2">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="nav2">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Services</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export { Navbar };

