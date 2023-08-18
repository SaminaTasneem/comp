import React,{useState} from 'react';
import { MdOutlineRemoveCircle } from "react-icons/md";
import './tablerow.css';

const Tablerow = () => {

  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <tr className='row'>
        <td className='remove'><MdOutlineRemoveCircle/></td>
        <td><img src='images/product_1.webp' className='tableimg'/></td>
        <td>Product Name</td>
        <td>Price</td>
        <td>
        <button onClick={decreaseCount} className='btn'>-</button>
          <span className='count'>{count}</span>
          <button onClick={increaseCount} className='btn'>+</button>
        </td>
        <td>SubTotal</td>
    </tr>
  )
}

export default Tablerow