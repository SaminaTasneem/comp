import React from 'react'
import PageHeader from '../../components/page-header/PageHeader'
import Shopcard from '../../components/shopcard/Shopcard'
import './shop.css';

const Shop = () => {
  return (
    <>
        <div>
            <PageHeader/>
            <div className='shopcard'>
            <Shopcard 
            productPath='/images/product_1.webp'
            productName='Something'
            productDetails='Ja ichha tai'
            productPrice='$78'
            />
            <Shopcard 
            productPath='/images/product_1.webp'
            productName='Nothing'
            productDetails='F my life'
            productPrice='$48'
            />
            <Shopcard 
            productPath='/images/product_1.webp'
            productName='Everything'
            productDetails='porashuna chere dibo'
            productPrice='$34'
            />
            <Shopcard 
            productPath='/images/product_1.webp'
            productName='Something'
            productDetails='Ja ichha tai'
            productPrice='$78'
            />
            <Shopcard 
            productPath='/images/product_1.webp'
            productName='Something'
            productDetails='Ja ichha tai'
            productPrice='$78'
            />
            <Shopcard 
            productPath='/images/product_1.webp'
            productName='Something'
            productDetails='Ja ichha tai'
            productPrice='$78'
            />
            <Shopcard 
            productPath='/images/product_1.webp'
            productName='Something'
            productDetails='Ja ichha tai'
            productPrice='$78'
            />
            </div>
        </div>
    </>
  )
}

export default Shop