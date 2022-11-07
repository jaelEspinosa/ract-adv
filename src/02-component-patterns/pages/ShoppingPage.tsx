
import {  ProductCard } from '../components';
import { Product } from '../interfaces/interfaces';
import '../styles/custom-styles.css'
import { useState } from 'react';

const product1 = {
  id: '1',
  title: 'coffe Mug - Card',
  img: './coffee-mug.png'
};

const product2 = {
  id: '2',
  title: 'coffe Mug - Meme',
  img: './coffee-mug2.png'
}

const products: Product[] = [product1, product2]

interface ProductInCart extends Product {
  count: number,
}
export const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})
 

  const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
    
    setShoppingCart(oldShoppingCart => {
    
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart
        return rest;
      }
      
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count }
      }
    })
  }

  return (
    <div >
      <h1>Shopping Store!!</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'

      }}>

        {
          products.map(product => (

            <ProductCard
              key={product.id}
              className='bg-dark'
              product={product}
              onChange={onProductCountChange}
              value = { shoppingCart[product.id]?.count || 0}
              
            >
              <ProductCard.Image className='custom-image' />
              <ProductCard.Title className='color-white text-bold' />
              <ProductCard.Buttons className='custom-buttons' />
            </ProductCard>
          ))
        }
      </div>
      <div className='shopping-cart'>
      {
        Object.entries(shoppingCart).map(([key, product]) => (
         
            <ProductCard
              key={key} 
              style={{ width: '100px' }}
              className='bg-dark'
              onChange={onProductCountChange}
              product={product}
              value={product.count}
            >
              <ProductCard.Image className='custom-image' />

              <ProductCard.Buttons className='custom-buttons' />
            </ProductCard>
        
        ))
      }
      </div>
    </div>
  )
}
