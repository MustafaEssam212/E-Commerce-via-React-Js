import React, {useState} from 'react';
import './product.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pes from '../pics/pes.jpg'
import fifa from '../pics/fifa.jpg'
import ps from '../pics/ps.png'
import ps4 from '../pics/ps4.jpg'
import laptop from '../pics/laptop.png'
import xbox from '../pics/xbox.png'
import cod from '../pics/cod.jpg'
import btf from '../pics/btf.jpg'

function Products2(){

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
                        
                        <img className="pic" src={pes}></img>

                        <p className="propar">PES 2021</p>
                        <p className="propar">74$</p>
                    
                        
                        <button className="show">Show</button>


                    </div>



                    <div className="product">

                         <div className="icons">
                        <i class="fas fa-heart" id="heart"></i>
                        <i class="fas fa-shopping-cart buying"></i>
                        </div>

                        
                         <img className="pic" src={btf}></img>
                         <p className="propar">Battlefield 21</p>
                          <p className="propar">50$</p>

                        <button className="show">Show</button>


                    </div>


                    <div className="product">

                    <div className="icons">
                        <i class="fas fa-heart" id="heart" ></i>
                        <i class="fas fa-shopping-cart buying"></i>
                        </div>


                         <img className="pic" src={ps}></img>
                         <p className="propar">PS5</p>
                          <p className="propar">20$</p>

                        <button className="show">Show</button>

                    </div>

                    

                    <div className="product">

                    <div className="icons">
                        <i class="fas fa-heart" id="heart" ></i>
                        <i class="fas fa-shopping-cart buying"></i>
                        </div>


                         <img className="pic" src={ps4}></img>
                         <p className="propar">PS4</p>
                          <p className="propar">45$</p>

                        <button className="show">Show</button>

                    </div>


                    <div className="product">

                    <div className="icons">
                        <i class="fas fa-heart" id="heart" ></i>
                        <i class="fas fa-shopping-cart buying"></i>
                        </div>


                         <img className="pic" src={laptop}></img>
                         <p className="propar">Gaming Laptop</p>
                          <p className="propar">67$</p>

                        <button className="show">Show</button>




                    </div>



                    <div className="product">

                    <div className="icons">
                        <i class="fas fa-heart" id="heart" ></i>
                        <i class="fas fa-shopping-cart buying"></i>
                        </div>


                         <img className="pic" src={xbox}></img>
                         <p className="propar">XBOX</p>
                          <p className="propar">798$</p>

                        <button className="show">Show</button>



                    </div>


                    <div className="product">

                    <div className="icons">
                        <i class="fas fa-heart" id="heart" ></i>
                        <i class="fas fa-shopping-cart buying"></i>
                        </div>


                         <img className="pic" src={cod}></img>
                         <p className="propar">Call Of Duty 2021</p>
                          <p className="propar">22$</p>

                        <button className="show">Show</button>


                    </div>


                    <div className="product">

                        
                    <div className="icons">
                        <i class="fas fa-heart" id="heart" ></i>
                        <i class="fas fa-shopping-cart buying"></i>
                        </div>


                         <img className="pic" src={fifa}></img>
                         <p className="propar">FIFA 21</p>
                          <p className="propar">340$</p>

                        <button className="show">Show</button>



                    </div>
                    </Carousel>
           
        </div>
    )
}

export default Products2;