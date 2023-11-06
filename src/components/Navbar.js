import React, { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
    const location = useLocation();
    const { token, dispatch } = useContext(UserContext); // Destructure token from your context


    return (
        <nav className="navbar">
            <header>
                <div className="navbar-controls">
                    {/* If there's no token, show the Register and Login buttons */}
                    {!token && (
                        <>
                            <Link to="/register" className="button">Register</Link>
                            <Link to="/login" className="button">Login</Link>
                        </>
                    )}
                    {/* If there is a token, you could show a Logout button */}
                    {token && (
                        <button
                            onClick={() => dispatch({ type: 'LOGOUT' })} // Dispatch a logout action
                            className="button"
                        >
                            Logout
                        </button>
                    )}
                </div>
                <div className={"navbar-row"}>
                    <img src="/NavbarBanner.png" alt="Navbar" />
                </div>
                <div className={"navbar-row"}>
                    {/* Check if the current path is not '/' before displaying this Link */}
                    {location.pathname !== "/" && (
                        <div className="container">
                            <Link to="/">
                                <img src="/bluewaterlogo.png" width={200} height={200} alt="Home logo" />
                                <h1>Bluewater Zoo Home</h1>
                            </Link>
                        </div>
                    )}
                    {/* Check if the current path is not '/freshwater' before displaying this Link */}
                    {location.pathname !== "/freshwater" && (
                        <div className="container" align={"center"}>
                            <Link to="/freshwater">
                                <img src="/FishIcon.jpg" width={200} height={200} alt="Freshwater Fish" />
                                <h1>Freshwater Fish</h1>
                            </Link>
                        </div>
                    )}
                    {/* Check if the current path is not '/saltwater' before displaying this Link */}
                    {location.pathname !== "/saltwater" && (
                        <div className="container" align={"center"}>
                            <Link to="/saltwater">
                                <img src="/SaltwaterFishIcon.jpg" width={200} height={200} alt="Saltwater Fish" />
                                <h1>Saltwater Fish</h1>
                            </Link>
                        </div>
                    )}
                    {/* Check if the current path is not '/saltwater' before displaying this Link */}
                    {location.pathname !== "/reptile" && (
                        <div className="container" align={"center"}>
                            <Link to="/reptile">
                                <img src="/ReptileIcon.jpg" width={200} height={200} alt="Reptile" />
                                <h1>Reptiles</h1>
                            </Link>
                        </div>
                    )}
                </div>
            </header>
        </nav>
    );
};

export default Navbar;
