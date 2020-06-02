import React from "react";
import "../../App.css";

class Footer extends React.Component{
    render(){
        return(
            
        <div>
            <footer id="main-footer">
            <a href="www.instagram.com" className="fab fa-instagram"></a>
            <a href="www.twitter.com" className="fab fa-twitter"></a>
            <a href="www.youtube.com" className="fab fa-youtube"></a>
            <p>.Essentials LLC &copy; 2020, All Rights Reserved</p>
            </footer>
        </div>
        );
    }
}


export default Footer;