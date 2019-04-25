import React from "react";
import PropTypes from 'prop-types';
import { Container } from "react-bootstrap"
import Products from "./Products";

class ProductCatalog extends React.Component {
  applyCategoryToProducts(){
    const {categories, products} = this.props;
    const categoriesAsMap = {};

    categories.forEach(category => {
      categoriesAsMap[category.id] = category.name
    });
    
    return products.map(product=> ({...product, categoryName: categoriesAsMap[product.category]}))
  }

  render() {
    const {addToBasket, removeFromToBasket} = this.props;
    return (
      <Container>
      <h2>Product Catalog</h2>
      <Products  removeFromToBasket={removeFromToBasket} addToBasket={addToBasket} products={this.applyCategoryToProducts()} />
    </Container>
    )
  }
}

ProductCatalog.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  addToBasket: PropTypes.func.isRequired,
  removeFromToBasket: PropTypes.func.isRequired
}

export default ProductCatalog;