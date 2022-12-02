import Product from "./Product";
import { useState, useEffect } from "react";

const Products = (props) => {
 const [products, setProducts] = useState([]);
  useEffect(() => {
     fetch('https://private-anon-10619bae74-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu')
     .then(response => response.json())
     .then(products => {
      console.log(products)
      setProducts(products);
     })
  }, []);
  return (
    <div className="container mx-auto pb-24">
      <h1 className="text-lg font-bold my-8"> Products</h1>
      <div className="grid grid-cols-5 my-8 gap-24">
       {
        products.map(product => <Product key={product.id} product={ product} />)
       }
      </div>
    </div>
  )
}

export default Products;