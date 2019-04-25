
import React from "react";
import { Card } from "react-bootstrap"
import PropTypes from 'prop-types';

function Products({products}) {
  return (
    products.map(product => (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{product.name} <small>{product.id}</small></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {product.category}
            </Card.Subtitle>
            <Card.Text>
              <p className="mb-0"><strong>Shipping time:</strong> {product.shippingDay } days</p>
              <p className="mt-0" ><strong>Price:</strong> ${product.price }</p>
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      ))
  );
}

Products.propTypes = {
    products: PropTypes.array.isRequired,
  }

export default Products;