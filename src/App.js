import React from "react";
import axios from "axios";
import ProductCatalog from "./components/ProductCatalog";
import BasketSummary from "./components/BasketSummary";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class App extends React.Component {
  state = {
    error: null,
    loading: false,
    basket: {},
    products: [],
    categories: []
  };
  addToBasket = product => {
    this.setState({
      basket: {
        ...this.state.basket,
        [product.id]: { ...product, quantity: product.minQty }
      }
    });
    toast.success(
      <div>
        <strong>Added product #id {product.id}</strong>{" "}
        <p>edit amount in basket summary</p>
      </div>,
      {}
    );
  };
  removeFromBasket = product => {
    if (this.state.basket[product.id]) {
      const newBasket = { ...this.state.basket };

      delete newBasket[product.id];
      this.setState({ basket: newBasket });
      toast.error(`Removed product #id ${product.id}`, {});
    }
  };
  updateProductQuantity = (product, quantity) => {
    const updatedProduct = { ...product };
    updatedProduct.quantity = quantity;

    this.setState({
      basket: { ...this.state.basket, [product.id]: updatedProduct }
    });
  };

  async getData() {
    const response = [];
    this.setState({
      loading: true
    });
    try {
      response[0] = await axios.get(`products.json`);
      response[1] = await axios.get(`categories.json`);

      this.setState({
        products: response[0].data,
        categories: response[1].data,
        error: null
      });
    } catch (err) {
      this.setState({
        error: "Could not load data"
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <Router>
        <ToastContainer />
        <Header />
        {this.state.error && (
          <Alert variant={"danger"}>{this.state.error}</Alert>
        )}
        <Route
          render={props => (
            <ProductCatalog
              removeFromBasket={this.removeFromBasket}
              addToBasket={this.addToBasket}
              categories={this.state.categories}
              products={this.state.products}
              loading={this.state.loading}
            />
          )}
          exact
          path="/"
        />
        <Route
          render={props => (
            <BasketSummary
              updateProductQuantity={this.updateProductQuantity}
              removeFromBasket={this.removeFromBasket}
              basket={Object.values(this.state.basket)}
            />
          )}
          path="/basket-summary"
        />
      </Router>
    );
  }
}
export default App;
