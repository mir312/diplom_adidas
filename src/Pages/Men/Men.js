import './Men.css';
import video2 from '../../video/messi.mp4'
import video3 from '../../video/messi-1.mp4'
import img4  from '../../img/sumba.png'
import img5  from '../../img/men_adi.png'
import img6 from '../../img/men_adi2.png'
import img7 from '../../img/men_adi3.png'
import img8 from '../../img/men_adi5.png'
import img9 from '../../img/men_adi4.png'
import img12 from '../../img/men_adi6.png'
function Men() {
  return (
    <section className="men">


      <video className='men_video' autoPlay muted>
        <source src={video2} type="video/mp4"></source>
      </video>

      <div className="container">
        <div className="messi">
          <h2 className="men_tit"> YOU GOT THIS</h2>

          <p className="men_desc">When you play free of expectations, pressure doesn't stand a chance. </p>

          <button className="btn_men flex">DISCOVER MORE
            <i className="icon_men"></i>
          </button>

        </div>

        <div className="card_homes flex">
           <div className="card_home">

            <input type='checkbox' name='' id='zoom_img' />

               <a href=""> </a>

           <label for="zoom_img">
             <img className='home_img' src={img4} alt="" />
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
                              <label for="zoom_img"><img className='home_img' src={img5} alt="" /></label>
                              <i className='heart_ic'></i>
                              <span className="price">70$</span>
                              <a href=""><h4 className="home_txt">Samba</h4></a>
                              <p>Originals</p>
                              <button className='shop_now'><a href="" className="">
                                   SHOP NOW
                              </a>
                              </button>
          </div>

    <div className="card_home">

                              <img src={img6} alt="" className="home_img" />
                              <i className='heart_ic'></i>
                              <span className="price">100$</span>
                              <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
                              <p>Originals</p>
                              <a href="" className="shop_now">
                                   SHOP NOW
                              </a>
       </div>
     <div className="card_home">
                              <img src={img9} alt="" />
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
            <video className='video_shoes' controls  autoPlay muted>
              <source src={video3} type="video/mp4"></source>
            </video>


          </div>
        </div>

        <div className="card_home">
                              <img src={img8} alt='' />
                              <i className='heart_ic'></i>
                              <span className="price">70$</span>
                              <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
                              <p>Originals</p>
                              <a href="" className="shop_now">
                                   SHOP NOW
                              </a>
          </div>


        
          <div className="card_home">
                              <img src={img7} alt='' />
                              <i className='heart_ic'></i>
                              <span className="price">70$</span>
                              <a href=""><h4 className="home_txt">Gazelle shoes</h4></a>
                              <p>Originals</p>
                              <a href="" className="shop_now">
                                   SHOP NOW
                              </a>
          </div>


                         <div className="card_home">
                              <img src={img12} alt="" />
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

export default Men;