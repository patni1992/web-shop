import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

function Products({ products }) {
  return (
    <Row>
      {products.map(product => (
        <Col xs={4}>
          <Card key={product.id}>
            <Card.Body>
              <Card.Title>
                {product.name} <small>{product.id}</small>
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
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired
};

export default Products;
