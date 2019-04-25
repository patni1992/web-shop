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
    return (
      <Container>
      <h2>Product Catalog</h2>
      <Products products={this.applyCategoryToProducts()} />
    </Container>
    )
  }
}

ProductCatalog.propTypes = {
  products: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
}

export default ProductCatalog;