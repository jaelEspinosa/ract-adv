
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';




const product = {
  id: '1',
  title: 'coffe Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  /* const {counter, increaseBy} = UseProduct() */
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />
        <div style = {{
          display:'flex',
          flexDirection:'row',
          flexWrap:'wrap'

        }}>
{/* COMPARTIENDO LAS PROPS DEL PADRE */}

        <ProductCard product = {product}>
          <ProductCard.Image />
          <ProductCard.Title title = 'Pepe'/>
          <ProductCard.Buttons  />
         </ProductCard>
{/* mandando sus props cada hijo */}

        <ProductCard product = {product}>
          <ProductImage img = { product.img }/>
          <ProductTitle />
          <ProductButtons /> 
        </ProductCard>
        

        </div>
    </div>
  )
}
