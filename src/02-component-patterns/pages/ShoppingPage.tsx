
import {  ProductCard } from '../components';

import '../styles/custom-styles.css'
import { useShoppingCart } from '../hooks/useShoppingCart';
import { products } from '../data/products';





export const ShoppingPage = () => {

  const {onProductCountChange,shoppingCart} = useShoppingCart()

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
