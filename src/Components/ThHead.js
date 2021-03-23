import React from 'react';
import {Link} from "react-router-dom";
import './ThHead.css';
import Products from './products'
import Products2 from './products2'

function ThHead(){



    return(

        <div className="ThParent">
                <span><i class="fas fa-arrow-up"></i></span>
            
            <div className="proDetails">
                <h1>
                    Newest Products
                </h1>

                <div className="arrows">
                    <a href="#">All</a>
                    <div id="column"></div>
                <i class="fas fa-arrow-left"></i>
                <i class="fas fa-arrow-right"></i>

                </div>

            </div>

            <Products />

            <div className="proDetails">
                <h1>
                    Gaming Products
                </h1>

                <div className="arrows">
                    <a href="#">All</a>
                    <div id="column"></div>
                <i class="fas fa-arrow-left"></i>
                <i class="fas fa-arrow-right"></i>

                </div>

            </div>

            <Products2 />


        </div>
    )
}

export default ThHead;