import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
  return (
    <div className="grid col-span-1 sm:col-span-2 md:col-span-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
  )
}

export default ProductList