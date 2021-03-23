import React from 'react';
import {Link} from "react-router-dom";
import './SecHead.css';
import secImg from '../pics/phone.png'


function SecHead(){
    return(
        
        <div className="secparent" id="sparent">

            <div className="left">

                    <h1>Buy best products all over the world on our site.</h1>
                    <p>Explore our website and get high quality products which is you can buy .. just order it to get it in 24 hours.</p>
                <div className="btns">
                    <Link to="/SignUp" className="firstbutton">Sign Up</Link>
                    <Link to="/SignIn" className="secbutton">Sign In</Link>
                </div>
                <br/>
    
            </div>

            <div className="right">

                        <img className="secmg" src={secImg}></img>

            </div>

            

        </div>


                   
    )
}

export default SecHead;