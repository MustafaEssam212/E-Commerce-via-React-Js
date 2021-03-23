import React from 'react'
import {Link} from "react-router-dom";
import './Header.css'

function Header(){

    function handletoggle(){
        var navbar = document.getElementById('navsg');
        navbar.classList.toggle ('navba');
        document.getElementById('msa').style.animation = 'navAnimate .5s linear forwards'
    }


    return(
        
                <div className="header">

                    <h1><Link to="/">Mustafa Essam</Link></h1> 
                   
                        <nav id="navsg" className="navba">
                            <ul id="msa" className="naviss">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/SignUp">Sign Up</Link></li>
                                <li><Link to="/SignIn">Sign In</Link></li>
                                <li><Link to="/Products">Prodcuts</Link></li>
                                <li><Link to="/Special">Special</Link></li>
                            </ul>
                        </nav>

                        <i onClick={handletoggle} class="fas fa-bars"></i>

                        <i class="fas fa-shopping-cart buy"></i>

                </div>
             
    )
}

export default Header;