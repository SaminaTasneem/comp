import React from 'react';
import { AiFillStar,AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './shopcard.css';

const Shopcard = (props) => {
  return (
    <div className='product'>
      <img src={props.productPath} alt='Product' />
      <div className='des'>
        <span>{props.productName}</span>
        <h5>{props.productDetails}</h5>
        <div className='star'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className='price-cart'>
        <h4>{props.productPrice}</h4>
        <Link to='/single'  state={{ rowData: props }}>
        <AiOutlineShoppingCart className='cart-icon'/>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Shopcard;