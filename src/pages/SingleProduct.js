import {useState, useEffect } from "react";
import {useParams} from "react-router-dom";

const SingleProduct = () => {
    const [product, setProduct] = useState({});
    const params = useParams();
    console.log(params);
    
    useEffect(() => {
        fetch(`https://private-anon-a97a38eb93-pizzaapp.apiary-mock.com/restaurants/restaurantId/menu${params.id}`).then(res =>res.json()).then(product => {
            console.log(product);
        })
    })

  return (
    <div className="container mx-auto mt-12">
    <button className="mb-12 font-bold">Back</button>
        <div className="flex">
        <img src="/images/pizza.png" alt="pizza"/>
        <div className="ml-16">
            <h1 className="text-xl font-bold">Havana Special</h1>
            <div className="text-md">small</div>
            <div className="font-bold mt-2">400</div>
            <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to card</button>
        </div>
        </div>
    </div>
  )
}

export default SingleProduct