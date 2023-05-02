import React from "react";
import '../App.css';
import './navbar.css';

export const Navbar = () => {
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-red">
            <p className="navbar-brand "><h1>NewsTimes</h1></p>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <a style={{color: "red"} }href='/'>Home</a>
                    </li>
                    <br></br>
                    <li  className="nav-item">
                        <a style={{color: "red",padding: "10px",} }href='/entertainment' >Entertainment</a>
                    </li>
                    <br></br>
                    <li className="nav-item">
                        <a style={{color: "red",padding: "10px",} }href='/finance' >Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a style={{color: "red",padding: "10px",} } href='/health' >Health</a>
                    </li>
                    <li className="nav-item">
                        <a style={{color: "red",padding: "10px",} } href='/science' >Science</a>
                    </li>
                    <li className="nav-item">
                        <a style={{color: "red",padding: "10px",} } href='/sports' >Sports</a>
                    </li>
                    <li className="nav-item">
                        <a style={{color: "red",padding: "10px",} } href='/tech' >Technology</a>
                    </li>
                    
                </ul>
            </div>
        </nav>
    </>;
};