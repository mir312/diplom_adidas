import './Women.css';
import video_women from "../../video/adi_women.mp4"

function Women() {
  return (
  
    <video className='men_video'  autoPlay muted>
    <source src={video_women} type="video/mp4"></source>
  </video>

  );
}





export default Women;