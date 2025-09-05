import { useEffect, useState } from "react";

//components
import ProductList from "./components/ProductList";


const App = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('api/products');
        if (!res.ok) {
          throw new Error('failed to fetch data');
        }
        const data = await res.json();
        setProducts(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchData();
  }, [])
  

  return (
    <div className='h-screen bg-gray-100 p-6'>
      <h1 className="text-bold text-3xl mb-6">🛒 Shopping Cart UI</h1>
      {isLoading && (<p className="font-bold text-xl">Loading...</p>)}
      {error && (<p className="error">{error}</p>)}
      {!error && !isLoading && products.length > 0 && (
        <ProductList products={products} />
      )}
    </div>
  )
}

export default App