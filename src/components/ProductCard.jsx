import React from 'react'

const ProductCard = ({ product }) => {
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
    </div>
  )
}

export default ProductCard