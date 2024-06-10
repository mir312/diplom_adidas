import './Women.css';
import video_women from "../../video/adi_women.mp4"
import video4 from "../../video/adida-sh.mp4"
import img13 from '../../img/women13.png'
import img14 from '../../img/women14.png'
import img15 from '../../img/women15.png'
import img16 from '../../img/women16.png'
import img17 from '../../img/women17.png'
import img18 from '../../img/women18.png'
import img19 from '../../img/women19.png'

function Women() {
  return (
  
    <section className='women'>
    <video className='men_video'  autoPlay muted>
    <source src={video_women} type="video/mp4"></source>
</video>

<div className="container">
<div className="women_block">
          

          <p className="kids_desc"> Engineered for speed, the adidas F50 is here to free the last </p>

          <button className="btn_kids flex">SHOP NOW
            <i className="icon_kids"></i>
          </button>

        </div>


        <div className="card_homes flex">
           <div className="card_home">

            <input type='checkbox' name='' id='zoom_img' />

               <a href=""> </a>

           <label for="zoom_img">
             <img className='home_img' src={img13} alt="" />
                              </label>

                              <i className='heart_ic'></i>
                              <span className="price">70$</span>
                              <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
                              <p className='home_p'>Originals</p>
                              <a href="" className="shop_now">
                                   SHOP NOW
                              </a>
                         </div>


     <div className="card_home">

                        

                              <input type='checkbox' name='' id='zoom_img' />
                              <label for="zoom_img"><img className='home_img' src={img14} alt="" /></label>
                              <i className='heart_ic'></i>
                              <span className="price">70$</span>
                              <a href=""><h4 className="home_txt">Samba</h4></a>
                              <p>Originals</p>
                              <a href="" className="shop_now">
                                   SHOP NOW
                              </a>
                            
          </div>

    <div className="card_home">

                              <img src={img15} alt="" className="home_img" />
                              <i className='heart_ic'></i>
                              <span className="price">100$</span>
                              <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
                              <p>Originals</p>
                              <a href="" className="shop_now">
                                   SHOP NOW
                              </a>
       </div>
     <div className="card_home">
                              <img src={img16} alt="" />
                              <i className='heart_ic'></i>
                              <span className="price">70$</span>
                              <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
                              <p>Originals</p>
                              <a href="" className="shop_now">
                                   SHOP NOW
                              </a>
       </div>

       <div className="cards_video">
          <div className="video_cadr">
            <video className='video_shoes'   autoPlay muted>
              <source src={video4} type="video/mp4"></source>
            </video>


          </div>
        </div>

        <div className="card_home">
                              <img src={img17} alt='' />
                              <i className='heart_ic'></i>
                              <span className="price">70$</span>
                              <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
                              <p>Originals</p>
                              <a href="" className="shop_now">
                                   SHOP NOW
                              </a>
          </div>


        
          <div className="card_home">
                              <img src={img18} alt='' />
                              <i className='heart_ic'></i>
                              <span className="price">70$</span>
                              <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
                              <p>Originals</p>
                              <a href="" className="shop_now">
                                   SHOP NOW
                              </a>
          </div>


                         <div className="card_home">
                              <img src={img19} alt="" />
                              <i className='heart_ic'></i>
                              <span className="price">70$</span>
                              <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
                              <p>Originals</p>
                              <a href="" className="shop_now">
                                   SHOP NOW
                              </a>
                         </div>


                    </div>


</div>

      
  </section>
  );
}





export default Women;