
import './About.css';
import img from '../../img/about_fig2.jpg'
import img1 from '../../img/about-1.png'
import img2 from '../../img/about_img2.jpeg'
import img3 from '../../img/about_fig.jpg'

function About() {
  return (
    <section className="about">
        <div className="black">
            <ul className="black_link flex">
              <a href=""><li>IMPACT</li></a>
             <a href=""> <li>PEOPLE</li></a>
              <a href=""><li>PLANET</li></a>
            </ul>
          </div>

          <div className="grey">
            <ul className="grey_link flex">
       <a href=""><li>OUR MISSION</li></a>
     <a href=""> <li>CHANGE MATERIALS</li></a>
      <a href=""><li>WEAR LONGER</li></a>
      <a href=""><li>REDUCE FOOTPRINT</li></a>
       <a href=""><li>MOVE FOR THE PLANET</li></a>
            </ul>
          </div>
<video className='video-2' controls autoPlay muted>
   <source src="https://res.cloudinary.com/adidas-app/video/upload/q_auto:good/v1/feed-assets/qja4xzctlcgydnqqsyjl.mp4" autoplay="" loop="" preload="metadata" crossorigin="anonymous" playsinline="" type="video/mp4"></source>
          </video>
      <p className='video-txt'>WITHOUT A BEAUTIFUL PLANET
THERE IS NO BEAUTIFUL GAME,
FOR THE PLACES WE PLAY.</p> 
        
 <div className="container">
<div className="commitment flex">
 
<video className='video-3' controls autoPlay muted>
   <source src= "https://res.cloudinary.com/adidas-app/video/upload/q_auto:good/v1/page-assets/40/bb3q62lxs9x2xz9eqpwr.mp4" poster="https://res.cloudinary.com/adidas-app/image/upload/c_limit,h_2532,q_auto:good,w_2532/v1/page-assets/40/nvvl4fzzg2hoaux9krvs.jpeg" preload="metadata" crossorigin="anonymous" autoplay="" loop="" preload ="metadata" crossorigin="anonymous" playsinline="" type="video/mp4"></source>
          </video>
          
<div className="about_txt">
          <h2 className="sec_about">OUR COMMITMENT</h2>
          <p className="desc_about">We’re transforming our business to help reduce our impact. And we’re on a mission to innovate further</p>
          </div>
</div>

    <div className="sport flex">
      <div className="sport_txt">
      <h2 className="sec_about">WE STRIVE TO MAKE SPORT MORE EQUITABLE</h2>
      </div>
      <div className="sport_img">
      <img src={img} alt="" />
      </div>
      <div className="sport_p">
      <h4 className="sec_sport">We ensure sport reflects and celebrates the communities and marketplace we serve.</h4>
      <p className="sec_deskp">It is our ambition that everyone experiences fair play and equal representation in sport, whether on and off the pitch or in the locker rooms and beyond.</p>
    </div>
  </div>


 <div className="about_cards">
  <h2 className="sec_about">
WE NEED TO BE THERE FOR THE PLANET</h2>

  <div className="about_card-image flex">
    <img src={img1} alt="" className="img_card" />
    <img src={img2}alt="" className="img_card" />
    <img src={img3} alt="" className="img_card" />
    
  </div>
 </div>

<div className="learn">
 <h2 className="sec_about">OUR PARTNERS & PROGRAMS</h2>
 <p className="sek_desk">Making Sport Equal can't be done alone. So we're teaming up and 
 co-creating with changemakers to develop programs for real, lasting impact.</p>
 
<button className="btn_about flex">
  <p>LEARN MORE</p>
  <i className="icon_about"></i>
</button>
</div>

<div id='scrollTop' className='arrow arrow_hide'>
                         <i className="scroll_icon"></i>
                         {/* 
     const scrollBtn = document.querySelector('.arrow');
window.onscroll =  ()  => {
     if (window.scrollY > 700){
          scrollBtn.classList.remove('arrow_hide');
     } else if (window.scrollY < 700){
          scrollBtn.classList.add('arrow_hide') ;  
     };
     scrollBtn.onclick = () => {
          window.scrollTo ( 0, 0);
     }
     };

     console.log('webpack') */}
                    </div>

    </div>


    </section>

  );

}





export default About;
