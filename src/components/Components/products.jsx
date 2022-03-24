import React, { Component } from "react";
import { Link } from "react-router-dom";
class Products extends Component {
  state = {
    products: [
      { Id: 1, name: "Product 1" },
      { Id: 2, name: "Product 2" },
      { Id: 3, name: "Product 3" },
    ],
  };
  render() {
    return (
      <ul>
        {this.state.products.map((productDetails) => {
          return (
            <li key={productDetails.Id}>
              <Link to={`/products/${productDetails.Id}`}>
                {productDetails.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

// export default ;
// const Products = () => {
//   return <h1>Products</h1>;
// };

export default Products;
