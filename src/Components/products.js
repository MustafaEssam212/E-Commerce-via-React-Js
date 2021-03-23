import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './product.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import suit from '../pics/suit.png'
import camera from '../pics/camera.png'
import powerbank from '../pics/powerbank.png'
import watch from '../pics/watch.png'
import chair from '../pics/chair.png'
import macbook from '../pics/macbook.png'
import shoe from '../pics/shoe.png'
import washer from '../pics/washer.png'

function Products(){

  const [color, setColor] = useState (false);

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
     
      const defoo = 'rgba(128, 128, 128, 0.452)';
const [colo, setColo] = useState (null);
     function handleColor(){
      if(colo == null){
        setColo ('rgb(255, 0, 0)')
      }else{
        setColo (null)
      }
  }
    

    return(
        <div className="products">

                    <Carousel responsive={responsive}>

                    <div className="product" key="1">

                        <div className="icons">
                        <i class="fas fa-heart" style={{color: colo}} id="heart" onClick={handleColor}></i>
                        <i class="fas fa-shopping-cart buying"></i>
                        </div>
                        
                        <img className="pic" src={suit}></img>

                        <p className="propar">Black Suit</p>
                        <p className="propar">74$</p>
                    
                        
                        <button className="show">Show</button>


                    </div>



                    <div className="product">

                         <div className="icons">
                        <i class="fas fa-heart" id="heart"></i>
                        <i class="fas fa-shopping-cart buying"></i>
                        </div>

                        
                         <img className="pic" src={camera}></img>
                         <p className="propar">Camera</p>
                          <p className="propar">50$</p>

                        <button className="show">Show</button>


                    </div>


                    <div className="product">

                    <div className="icons">
                        <i class="fas fa-heart" id="heart" ></i>
                        <i class="fas fa-shopping-cart buying"></i>
                        </div>


                         <img className="pic" src={powerbank}></img>
                         <p className="propar">Xiaomi Powerbank</p>
                          <p className="propar">20$</p>

                        <button className="show">Show</button>

                    </div>

                    

                    <div className="product">

                    <div className="icons">
                        <i class="fas fa-heart" id="heart" ></i>
                        <i class="fas fa-shopping-cart buying"></i>
                        </div>


                         <img className="pic" src={watch}></img>
                         <p className="propar">Sea-Dweller</p>
                          <p className="propar">45$</p>

                        <button className="show">Show</button>

                    </div>


                    <div className="product">

                    <div className="icons">
                        <i class="fas fa-heart" id="heart" ></i>
                        <i class="fas fa-shopping-cart buying"></i>
                        </div>


                         <img className="pic" src={chair}></img>
                         <p className="propar">Gray-Chair</p>
                          <p className="propar">67$</p>

                        <button className="show">Show</button>




                    </div>



                    <div className="product">

                    <div className="icons">
                        <i class="fas fa-heart" id="heart" ></i>
                        <i class="fas fa-shopping-cart buying"></i>
                        </div>


                         <img className="pic" src={macbook}></img>
                         <p className="propar">Macbook</p>
                          <p className="propar">798$</p>

                        <button className="show">Show</button>



                    </div>


                    <div className="product">

                    <div className="icons">
                        <i class="fas fa-heart" id="heart" ></i>
                        <i class="fas fa-shopping-cart buying"></i>
                        </div>


                         <img className="pic" src={shoe}></img>
                         <p className="propar">NIKE Shoe</p>
                          <p className="propar">22$</p>

                        <button className="show">Show</button>


                    </div>


                    <div className="product">

                        
                    <div className="icons">
                        <i class="fas fa-heart" id="heart" ></i>
                        <i class="fas fa-shopping-cart buying"></i>
                        </div>


                         <img className="pic" src={washer}></img>
                         <p className="propar">Washer</p>
                          <p className="propar">340$</p>

                        <button className="show">Show</button>



                    </div>
                    </Carousel>
           
        </div>
    )
}

export default Products;