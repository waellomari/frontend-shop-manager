import { useParams} from 'react-router-dom';
import Products from '../Products';


function ProductDetailsPage (product) {
    const { productId } = useParams();

    return (
        <>
        <a href="#!" className="list-group-item list-group-item-action flex-column align-items-start px-5 py-3">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{product.name}</h5>
            <small>{product.articleNo}</small>
          </div>
          <p className="mb-1">{product.description}</p>
          <small>{product.price}</small>
        </a>
        </>
    );
};

export default ProductDetailsPage;