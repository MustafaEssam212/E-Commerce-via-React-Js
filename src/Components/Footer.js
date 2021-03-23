import React from 'react'
import {Link} from "react-router-dom";
import './Footer.css'

function Footer(){
    return(
        <div className="Footercont">

            <div className="fleft">
                <p>Mustafa Essam</p>
            </div>
            <div className="fcenter">
                <p>
                    This is an E-Commerce Website Designed by Mustafa Essam
                </p>
            </div>
            <div className="fright">
                <p>Follow Me</p>
                <div className="Conz">
                <a href="https://www.facebook.com/ZamalKawiAna1/" target="_blank"><i class="fab fa-facebook"></i></a>
                <a href="https://api.whatsapp.com/send?phone=201067932128&text=send%20me%20a%20message%20%F0%9F%98%83" target="_blank"><i class="fab fa-whatsapp-square"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer;