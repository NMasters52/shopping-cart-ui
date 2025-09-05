import {  } from "react";

//components
import ProductList from "./components/ProductList";


const App = () => {
  
  return (
    <div className='h-screen bg-gray-100 p-6'>
      <h1 className="text-bold text-3xl mb-6">🛒 Shopping Cart UI</h1>
        <ProductList />
    </div>
  )
}

export default App