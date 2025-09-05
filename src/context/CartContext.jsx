import {useState, createContext, useContext} from 'react'

const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prev) => {
            //find if the product past matches the previous products in the cart 
            const existingItem = prev.find((item) => item.id === product.id);

            //if the previous item in the cart matches, add one to the qty. else return the item as is.
            if (existingItem) {
               return prev.map((item) =>
                    item.id === product.id ? {...item, qty: item.qty + 1} : item
                );
            }

            //if the item was not in the cart return it with the qty: 1 added to its data structure. 
            return [...prev, {...product, qty: 1}];
            });
        };

        //take the id of the item passed. take prev state, filter out where the item.id is equal to the passed id. 
        const removeFromCart = (id) => {
            setCart((prev) => prev.filter(item => item.id !== id))
        }

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext);
}