import { useState, useEffect, createContext, useContext } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const res = await fetch('/api/products');
            if (!res.ok) {
            throw new Error('failed to fetch data');
            }
            const data = await res.json();
            setProducts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
        }
        
        fetchData();
    }, [])

    return (
        <ProductContext.Provider value={{products, isLoading, error}}>
            { children }
        </ProductContext.Provider>
    );
}

export function useProducts() {
    return useContext(ProductContext);
}