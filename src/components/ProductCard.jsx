import React from 'react'
import { useCart } from '../context/CartContext'

const ProductCard = ({ product }) => {
  const {addToCart} = useCart();

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
        <img 
        src={product.image} 
        alt={product.name} 
        className="rounded object-cover h-40 mb-4"
        />
        <h2 className="font-semibold text-xl">{product.name}</h2>
        <p className="text-gray-500 text-sm mb-2">{product.description}</p>
        <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
        <button 
          className="bg-blue-600 mt-3 py-2 px-4 text-white transition rounded cursor-pointer hover:bg-blue-700"
          onClick={() => addToCart(product)}
        > 
          Add To Cart
        </button>   
    </div>
  )
}

export default ProductCard