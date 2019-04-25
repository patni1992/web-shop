import React from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import PropTypes from 'prop-types';

class BasketSummary extends React.Component {
 getProductPriceLabel(product){
   const price = parseInt(product.price);
   const quantity = parseInt(product.quantity)  || 1;

  return `${price} * ${quantity} = ${price * quantity}`;
 }
  getTotaPrice(){
    const {basket} = this.props;
    let total = 0;
    
    if(!basket.length) {
      return 0;
    }
    basket.forEach(item => total += parseInt(item.quantity) * parseInt(item.price))

    return total;
  }
  createSelectInput(value, min, max, stock) {
    const options = [];
    min = parseInt(min);
    max = parseInt(max);
    stock = parseInt(stock);

    if (max === 0) {
      max = stock;
    }

    if(min === 0) {
      min = 1;
    }

    for (let i = min; i <= max; i++) {
      options.push(<option>{i}</option>);
    }

    return options;
  }

  render() {
    const { basket, removeFromBasket, updateProductQuantity } = this.props;
    return (
      <Container>
        <h2>Basket summary</h2>
        <Card>
          <Card.Header>Cart Total Price ${this.getTotaPrice()}</Card.Header>
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
                  <strong>Total price:</strong> {this.getProductPriceLabel(item)}
                </p>
                <Form.Group>
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control onChange={e =>  updateProductQuantity(item, e.target.value)} as="select">
                    {this.createSelectInput(
                      item.quantity,
                      item.minQty,
                      item.maxQty,
                      item.stock
                    )}
                  </Form.Control>
                </Form.Group>
                <Button onClick={() => removeFromBasket(item,)} variant="danger">Remove</Button>
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
  basket: PropTypes.array.isRequired,
  removeFromBasket: PropTypes.func.isRequired,
  updateProductQuantity: PropTypes.func.isRequired
}


export default BasketSummary;
