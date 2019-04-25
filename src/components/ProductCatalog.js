import React from "react";
import PropTypes from 'prop-types';
import { Container } from "react-bootstrap"
import Products from "./Products";

function ProductCatalog({products}) {
  return (
    <Container>
      <h2>Product Catalog</h2>
      <Products products={products} />
    </Container>
  );
}

ProductCatalog.propTypes = {
  products: PropTypes.array.isRequired,
}


export default ProductCatalog;