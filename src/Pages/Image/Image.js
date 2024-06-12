import './Image.css';
import img from '../../img/adi-1.png'
import img1 from '../../img/adi_women.png'

function Image() {
  return (
    <section className="Image">
      <div className="container">

        <div className="zoom flex">
          <input type='checkbox' name='' id='zoom_img' />


          <label for="zoom_img"><img className='home_image' src="https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/29af4e86e6474619ad304712bad6afb7_9366/Forum_Low_CL_Shoes_Blue_IG8700_01_standard.jpg" alt="" /></label>

          <video className='image_video' preload="auto" loop="" playsinline="" src="https://assets.adidas.com/videos/ar_1,w_480,c_fill,q_auto,f_auto/7009a008be984af4ac921eb1e168c2c6_d98c/Forum_Low_CL_Shoes_Blue_IG8700_video.mp4" autoplay=""></video>

          <div className="size">
            <h2 className="size_desc">Sizes</h2>
            <div className="size_nums flex">
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
            </div>

          </div>


        </div>


        {/* <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Элемент аккордеона #1
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Элемент аккордеона #2
              </button>
            </h2>
            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Элемент аккордеона #3
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
          </div>
        </div> */}

{/* 
        <div className="description">

        <input type='checkbox' name='' id='desc' />
        <label for="desc" className='desc_border'>

    <div className="border_white"></div>
        </label>
        </div> */}
      </div>
    </section>


  );
}

export default Image;