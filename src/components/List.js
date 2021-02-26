export default function List({product}){
    return (
        <a href="#!" class="list-group-item list-group-item-action flex-column align-items-start ">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{product.name}</h5>
            <small>3 days ago</small>
          </div>
          <p class="mb-1">{product.description}</p>
          <small>{product.price}</small>
        </a>
    )
};