import List from './List';
import { useContext } from "react";
import ProductsContext from '../context/ProductsContext';


export default function Products() {
    const { products } = useContext(ProductsContext);

    return (
        <div class="list-group">
            { products.map((product, index)=> (
              <List
              key = {index}
              product = { product } />
              
            ) )}
          
        </div>
    );
};