import React from 'react'
import './table.css';
import { MdOutlineRemoveCircle } from "react-icons/md";
import Tablerow from './Tablerow';

const Table = () => {
  return (
    <>
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
                    <Tablerow/>
                    <Tablerow/>
                    <Tablerow/>
                </tbody>
            </table>
        </section>
    </>
  )
}

export default Table