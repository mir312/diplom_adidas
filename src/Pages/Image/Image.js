import './Image.css';
import img from '../../img/adi-1.png'
import img1 from '../../img/adi_women.png'

function Image() {
  return (
    <section className="Image">
      <div className="container">

        <div className="zoom flex">
    <input type='checkbox' name='' id='zoom_img'/>
    
 
 <label for="zoom_img"><img className='home_img' src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/29af4e86e6474619ad304712bad6afb7_9366/Forum_Low_CL_Shoes_Blue_IG8700_01_standard.jpg" alt="" /></label>

 <video className='image_video' preload="auto" loop="" playsinline="" src="https://assets.adidas.com/videos/ar_1,w_480,c_fill,q_auto,f_auto/7009a008be984af4ac921eb1e168c2c6_d98c/Forum_Low_CL_Shoes_Blue_IG8700_video.mp4" autoplay=""></video>

 <div className="size flex">
<h2 className="size_desc">Sizes</h2>
  <div className="size_num"><span>36</span></div>
  <div className="size_num1"><i className='size_ic'></i><span>37</span></div>
  <div className="size_num"><span>38</span></div>
  <div className="size_num"><span>39</span></div>
  <div className="size_num"><span>40</span></div>
  <div className="size_num1"><i className='size_ic'></i><span>41</span></div>
  <div className="size_num"><span>42</span></div>

  <div className="size_num"><span>36</span></div>
  <div className="size_num"><span>37</span></div>
  <div className="size_num"><span>38</span></div>
  <div className="size_num"><span>39</span></div>
  <div className="size_num1"><i className='size_ic'></i><span>40</span></div>
  <div className="size_num"><span>41</span></div>
  <div className="size_num"><span>42</span></div>
  <div className="size_num"><span>42</span></div>

 </div>
 

 </div>
 </div>
 </section>


  );
}

export default Image;