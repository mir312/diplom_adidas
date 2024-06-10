import './Women.css';
import video_women from "../../video/adi_women.mp4"

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


        
</div>

      
  </section>
  );
}





export default Women;