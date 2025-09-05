//components
import ProductList from "./components/ProductList";
import { Header } from "./components/Header";


const App = () => {
  
  return (
    <>
      <Header />
      <div className='h-screen bg-gray-100 p-6'>
        <h1 className="text-bold text-3xl mb-6">🛒 Shopping Cart UI</h1>
          <ProductList />
      </div>
    </>
    
  )
}

export default App