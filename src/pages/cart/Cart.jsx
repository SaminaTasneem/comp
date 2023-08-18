import React,{useState,useEffect} from 'react';
import { Link, } from 'react-router-dom';
import { MdOutlineRemoveCircle } from "react-icons/md";
import './cart.css'
import Table from '../../components/cart_components/Table'
import PageHeader from '../../components/page-header/PageHeader'
import { useCart } from '../../cardcontext/CardContext';

const Cart = () => {
  const { cart,dispatch } = useCart();
  const [count, setCount] = useState(0);
  const [selectedImage, setSelectedImage] = useState('/images/product_1.webp');

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart.items));
  }, [cart.items]);

  const increaseCount = (itemId) => {
    const updatedCart = cart.items.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch({
      type: 'SET_CART',
      payload: updatedCart,
    });
  };

  const decreaseCount = (itemId) => {
    const updatedCart = cart.items.map((item) =>
      item.id === itemId && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    dispatch({
      type: 'SET_CART',
      payload: updatedCart,
    });
  };

  const removeFromCart = (itemId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: itemId,
    });
  };
  return (
    <div>
        <PageHeader/>
        <div className='table'>
        <section id='cart'>
            <table width='100%'>
                <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Product</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                    </tr>
                </thead>
                <tbody>
                {cart.items.map((item)=>(
                    <tr className='row' key={item.id}>
                      <td className='remove'>
                      <MdOutlineRemoveCircle onClick={() => removeFromCart(item.id)}/>
                      </td>
                      <td><img src='images/product_1.webp' className='tableimg'/></td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                      <button onClick={decreaseCount} className='btn'>-</button>
                        <span className='count'>{count}</span>
                        <button onClick={increaseCount} className='btn'>+</button>
                      </td>
                      <td>SubTotal</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </section>
        </div>
        <div className='button'>
        <Link to='/'>
        <button className='go-back'>Go back to shopping</button>
        </Link>
        <button className='go-back'>Confirm Order</button>
        </div>
    </div>
  )
}

export default Cart