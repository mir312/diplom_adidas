import './Men.css';
import video2 from '../../video/messi.mp4'
import video3 from '../../video/messi-1.mp4'
function Men() {
  return (
    <section className="men">


      <video className='men_video' autoPlay muted>
        <source src={video2} type="video/mp4"></source>
      </video>

      <div className="container">
        <div className="messi">
          <h2 className="men_tit"> YOU GOT THIS</h2>

          <p className="men_desc">When you play free of expectations, pressure doesn't stand a chance.</p>

          <button className="btn_men flex">DISCOVER MORE
            <i className="icon_men"></i>
          </button>

        </div>

        <div className="cards_video flex">
          <div className="video_cadr">
            <video className='video_shoes' controls  autoPlay muted>
              <source src={video3} type="video/mp4"></source>
            </video>


          </div>
        </div>
      </div>
    </section>

  );
}

export default Men;