import './Delivery.css';

function Delivery() {
  return (
    // <div class="heart"></div>

    <section className='delivery'>
   <div className="container">
   <h2 className="del_tit">HOW CAN WE HELP YOU?</h2>

   <div className="del_cards bord flex">
    <div className="del_card"><a href="">
      <p className="del_desc">Refunds</p>
      <p className="del_desc2">Return and Refunds</p>
      </a></div>
    <div className="del_card"><a href=""><p className="del_desc">Returning an item</p>
    <p className="del_desc2">Return and Refunds</p>
    </a></div>
    <div className="del_card"><a href="">
      <p className="del_desc">Returning an item</p>
      <p className="del_desc2">Return and Refunds</p>
      </a></div>
    <div className="del_card"><a href=""><p className="del_desc">Returning an item</p>
    <p className="del_desc2">Return and Refunds</p></a>
    </div>
   </div>

   <h2 className="del_help">HELP CATEGORIES</h2>

   <div className="delivery_icons flex">
    <a href=""><div className="del_border">
    
      <i className='del_ic1'></i>
      <h4 className="del-txt">RETURN REFUND</h4>
      </div></a>
   

    <a href=""><div className="del_border">
    
      <i className='del_ic2'></i>
      <h4 className="del-txt">DELIVERY
      </h4>
      </div>
      </a>

      <a href=""><div className="del_border">
    
    <i className='del_ic3'></i>
    <h4 className="del-txt">PAYMENT</h4>
    </div></a>

    <a href=""><div className="del_border">
    
      <i className='del_ic4'></i>
      <h4 className="del-txt">ORDERING</h4>
      </div></a>

      <a href=""><div className="del_border">
    
    <i className='del_ic5'></i>
    <h4 className="del-txt">COMPANY INFORMATION</h4>
    </div></a>

    <a href=""><div className="del_border">
    
    <i className='del_ic6'></i>
    <h4 className="del-txt">ACCOUNT NEWSLETTER</h4>
    </div></a>


    <a href=""><div className="del_border">
    
    <i className='del_ic7'></i>
    <h4 className="del-txt">PRODUCTS</h4>
    </div></a>

    <a href=""><div className="del_border">
    
    <i className='del_ic8'></i>
    <h4 className="del-txt">PROMOTIONS VOUCHERS</h4>
    </div></a>

    <a href=""><div className="del_border">
    
    <i className='del_ic9'></i>
    <h4 className="del-txt">RETURN REFUND</h4>
    </div></a>




   </div>
   </div>
    </section>

  );
}

export default Delivery;