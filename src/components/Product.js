import React from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import PropTypes from "prop-types";

function Product({ product, add, remove }) {
  return (
    <Card key={product.id}>
      <Card.Body>
        <Card.Title>
          {product.name.substring(0, 20)} <small>{product.id}</small>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {product.categoryName}
        </Card.Subtitle>
        <p className="mb-0">
          <strong>Shipping time:</strong>
          {product.shippingDay} days
        </p>
        <p className="mt-0">
          <strong>Price:</strong> ${product.price}
        </p>
        <ButtonGroup aria-label="Basic example">
          <Button
            className="mr-3"
            variant="success"
            onClick={event => add(product)}
          >
            Add
          </Button>
          <Button onClick={event => remove(product)} variant="danger">
            Remove
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

export default Product;
