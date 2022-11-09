
import {  ProductCard } from '../components';

import '../styles/custom-styles.css'

import { products } from '../data/products';
import { InitialValues } from '../interfaces/interfaces';


const product = products[0]


export const ShoppingPage = () => {

  

  return (
    <div >
      <h1>Shopping Store</h1>
      <hr />
      
            <ProductCard
              key={product.id}
              product={product}           
              className='bg-dark color-white'
              initialValues = {{
                count: 4,
                maxCount: 10,
                
              }}
              >
              {
                ({reset, isMaxCountReached, increaseBy, count, }) => (
                  <>
                    <ProductCard.Image className='custom-image' />
                    <ProductCard.Title className=' text-bold' />
                    <ProductCard.Buttons className='custom-buttons' />


                    <button onClick={ reset }>Reset</button>


                    <button onClick={ () => increaseBy(-2) }> - 2</button>
                   {!isMaxCountReached && <button onClick={ () => increaseBy(2) }> + 2</button>} 
                    <span> count :{count}</span>
                  
                  </>
                )
              }
           
            </ProductCard>

    
    </div>
  )
}
