import React from "react";
import "../../App.css";

class Nav extends React.Component{
    render(){
        return(
            <nav id="navbar">
        <div className="container">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a  className="current" href="products.html">Shop</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
        <h1><i className="fas fa-socks"></i> .Essentials</h1>
        </div>
    </nav>
            
        );
    }
}

export default Nav;