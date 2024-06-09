import './Kids.css';
import video1 from '../../video/kids.mp4'
import img_kids1 from '../../img/kids_2.png'
import img_kids2 from '../../img/kids_3.png'
import img_kids3 from '../../img/kids_4.png'
import img_kids4 from '../../img/kids_5.png'
import img_kids5 from '../../img/kids_6.png'
import img_kids6 from '../../img/kids_2.png'
import img_kids7 from '../../img/kids_7.png'
import img_kids8 from '../../img/kids_8.png'
function Kids() {
  return ( 
    <section className="kids">

      <video className='kids_video' autoPlay muted>
        <source src={video1} type="video/mp4"></source>
      </video>


      <div className="container">
        <div className="kids_disney">
          <h2 className="kids_tit"> ADIDAS | DISNEY :</h2>
          <h2 className="kids_tit"> THE LION KING</h2>
          <p className="kids_desc">For every brave adventure</p>

          <button className="btn_kids flex">SHOP NOW
            <i className="icon_kids"></i>
          </button>

        </div>


        <div className="card_homes flex">
                         <div className="card_home">

                              <input type='checkbox' name='' id='zoom_img' />

                              <a href=""> 
                              
                              </a>

                              <label for="zoom_img">
                                   <img className='home_img' src={img_kids1} alt="" />
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
                              <label for="zoom_img"><img className='home_img' src={img_kids2} alt="" /></label>
                              <i className='heart_ic'></i>
                              <span className="price">70$</span>
                              <a href=""><h4 className="home_txt">Samba</h4></a>
                              <p>Originals</p>
                              <a href="" className="shop_now">
                                   SHOP NOW
                              </a>
                             
                         </div>

                         <div className="card_home">

                              <img src={img_kids3} alt="" className="home_img" />
                              <i className='heart_ic'></i>
                              <span className="price">100$</span>
                              <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
                              <p>Originals</p>
                              <a href="" className="shop_now">
                                   SHOP NOW
                              </a>
                         </div>
                         <div className="card_home">
                              <img src={img_kids4} alt="" />
                              <i className='heart_ic'></i>
                              <span className="price">70$</span>
                              <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
                              <p>Originals</p>
                              <a href="" className="shop_now">
                                   SHOP NOW
                              </a>
                         </div>

                         <div className="card_home">
                              <img src={img_kids5} />
                              <i className='heart_ic'></i>
                              <span className="price">70$</span>
                              <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
                              <p>Originals</p>
                              <a href="" className="shop_now">
                                   SHOP NOW
                              </a>
                         </div>

                         <div className="card_home">
                              <img src={img_kids6} />
                              <i className='heart_ic'></i>
                              <span className="price">70$</span>
                              <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
                              <p>Originals</p>
                              <a href="" className="shop_now">
                                   SHOP NOW
                              </a>
                         </div>

                         <div className="card_home">
                              <img src={img_kids7} alt="" />
                              <i className='heart_ic'></i>
                              <span className="price">70$</span>
                              <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
                              <p>Originals</p>
                              <a href="" className="shop_now">
                                   SHOP NOW
                              </a>
       </div>

       
       <div className="card_home">
                              <img src={img_kids8} alt="" />
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

export default Kids;