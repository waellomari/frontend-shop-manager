import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductsContext from './ProductsContext';

function ProductsProvider ({children}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:4444/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, []);
    return (
        <ProductsContext.Provider value={{
            products
        }}>
        {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;