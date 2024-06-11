import { useContext } from "react";
import { useMatch } from "react-router-dom"
import { AppContext } from "../../App";
import NotFound from "../NotFound/NotFound";
import { AddToCart } from "../../Components/AddToCart/AddToCart";
import  './Product.css'

export default function Product() {
  const { params } = useMatch("/products/:slug");
  const { products } = useContext(AppContext);

  const product = products.find(product => product.slug === params.slug);

  if (!product) {
    return <NotFound />
  }

  return (
    <div className="container">
    <div className="Product  flex">
      
      <div className="product_img">
        <img className="order_img"src={product.picture} alt={product.name} />
      </div>
      <div className="product_order">

      <div className="size_prod">
            <h2 className="size_desc">Sizes</h2>
            <div className="size_nums flex">
              <div className="size_num"><span>36</span></div>
              <div className="size_num1"><i className='size_ic'></i><span>37</span></div>
              <div className="size_num"><span>38</span></div>
              <div className="size_num"><span>39</span></div>
              <div className="size_num"><span>40</span></div>
              <div className="size_num1"><i className='size_ic'></i><span>41</span></div>
              <div className="size_num"><span>42</span></div>

              </div>
            </div>
        <h1 className="product_desc">{product.name}</h1>
        <p><strong className="product_price">Price:</strong> {product.price}$</p>
        <p><strong className="product_txt">Description: </strong>{product.description}</p>
        <div className="product_btn">
        <AddToCart product={product} />
        </div>

        <h2 className="color_desc">Colors</h2>
        <div className="colors_product flex">
     
          <a href=""><div className="color1"></div></a>
         <a href=""> <div className="color2"></div></a>
          <a href=""><div className="color3"></div></a>
          <a href=""><div className="color4"></div></a>
         <a href=""><div className="color5"></div></a> 
         <a href=""><div className="color6"></div></a> 
        <a href=""> <div className="color7"></div></a>
        </div>
      </div>
    </div>
    
    </div>
  )
}