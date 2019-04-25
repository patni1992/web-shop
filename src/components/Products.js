import React from "react";
import { Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import Product from "./Product";

function Products({ products, addToBasket, removeFromToBasket }) {
  return (
    <Row>
      {products.map(product => (
        <Col xs={4} key={product.id}>
          <Product product={product} remove={removeFromToBasket} add={addToBasket}/>
        </Col>
      ))}
    </Row>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
  addToBasket: PropTypes.func.isRequired,
  removeFromToBasket: PropTypes.func.isRequired
};

export default Products;
