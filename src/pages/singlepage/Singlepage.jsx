import { useState } from 'react';
import React from 'react';
import './singlepage.css';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../cardcontext/CardContext';

const SinglePage = () => {
  const { dispatch } = useCart();

  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState('/images/product_1.webp');

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  
  const handleSmallImageClick = (imagePath) => {
    setSelectedImage(imagePath);
  };
    const location = useLocation();
    const parsedRowData = location.state && location.state.rowData;
  
    if (!parsedRowData) {
      // Handle the case when there's no rowData in state
      return <div>Error: No data available</div>;
    }
    else{  
       // const parsedRowData = JSON.parse(decodeURIComponent(rowData));
       const addToCart = () => {
        dispatch({
          type: 'ADD_TO_CART',
          payload: {
            // id: parsedRowData.id, // Assuming each product has an ID
            name: parsedRowData.productName,
            price: parsedRowData.productPrice,
            quantity: count,
          },
        });
      };
  return (
    <>
      <div className='prodetails'>
        <div className='single-pro-image'>
          <img src={selectedImage} alt="Product" width='100%' className='main-image'/>
          <div className='small-image-group'>
          <div className='small-image-col'>
            <img src='/images/product_2.webp' alt="Product" width='100%' className='small-image'
              onClick={() => handleSmallImageClick('/images/product_2.webp')}
            />
          </div>
          <div className='small-image-col'>
            <img src='/images/product_3.webp' alt="Product" width='100%' className='small-image'
              onClick={() => handleSmallImageClick('/images/product_3.webp')}
            />
          </div>
          <div className='small-image-col'>
            <img src='/images/product_1.webp' alt="Product" width='100%' className='small-image'
              onClick={() => handleSmallImageClick('/images/product_1.webp')}
            />
          </div>
          <div className='small-image-col'>
            <img src='/images/product_3.webp' alt="Product" width='100%' className='small-image'
              onClick={() => handleSmallImageClick('/images/product_3.webp')}
            />
          </div>
          </div>
        </div>
        <div className='single-pro-details'>
          <h6>Home / products</h6>
          <h4>{parsedRowData.productName}</h4>
          <h3>{parsedRowData.productPrice}</h3>
          <select>
            <option>Select Color</option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
          </select>
          <button onClick={decreaseCount} className='btn'>-</button>
          <span className='count'>{count}</span>
          <button onClick={increaseCount} className='btn'>+</button>
          <Link to='/cart'>
          <button onClick={addToCart}>Add to cart</button>
          </Link>
          <h4>Product Details</h4>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
          qui officia deserunt mollit anim id est laborum.</span>
        </div>
      </div>
    </>
  )
    }
}

export default SinglePage;