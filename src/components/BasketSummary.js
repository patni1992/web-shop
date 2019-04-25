import React from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import PropTypes from 'prop-types';

class BasketSummary extends React.Component {
  createSelectInput(value, min, max, stock) {
    const options = [];
    min = parseInt(min);
    max = parseInt(max);
    stock = parseInt(stock);

    if (max === 0) {
      max = stock;
    }
    for (let i = min; i <= max; i++) {
      options.push(<option>{i}</option>);
    }
    
    return options;
  }
  render() {
    const { basket } = this.props;
    return (
      <Container>
        <h2>Basket summary</h2>
        <Card>
          <Card.Header>Cart</Card.Header>
          {basket.map(item => (
            <Card>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <p className="mb-0">
                  <strong>Shipping time: </strong>
                  {item.shippingDay} days
                </p>
                <p className="mb-0">
                  <strong>Min quantity:</strong>{item.minQty}
                </p>
                <p className="mb-0">
                  <strong>Max Quantity:</strong> {item.maxQty}
                </p>
                <p className="mb-0">
                  <strong>Stock:</strong> {item.stock}
                </p>
                <p className="mb-0">
                  <strong>Price:</strong> ${item.price}
                </p>
                <p >
                  <strong>Total price:</strong> {item.quantity} * {item.price} = ${parseInt(item.quantity) * parseInt(item.price)}
                </p>
                <Form.Group>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control as="select">
                    {this.createSelectInput(
                      item.quantity,
                      item.minQty,
                      item.maxQty,
                      item.stock
                    )}
                  </Form.Control>
                </Form.Group>
                <Button variant="danger">Remove</Button>
              </Card.Body>
              <hr />
            </Card>
          ))}
        </Card>
      </Container>
    );
  }
}
BasketSummary.propTypes = {
  Basket: PropTypes.array.isRequired,
}


export default BasketSummary;
