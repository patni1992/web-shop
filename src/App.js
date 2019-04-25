import React from "react";
import axios from "axios";
import ProductCatalog from "./components/ProductCatalog";
import BasketSummary from "./components/BasketSummary";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


class App extends React.Component {
  state = {
    basket: {},
    products: [],
    categories: []
  };
  addToBasket = (product) => {
    this.setState({ basket: { ...this.state.basket, [product.id]: { ...product, quantity: product.minQty } } })
    toast.success(<div><strong>Added product #id {product.id}</strong> <p>edit amount in basket summary</p></div>, {
    });
  }
  removeFromBasket = (product) => {
    if (this.state.basket[product.id]) {
      const newBasket = { ...this.state.basket }
      
      delete newBasket[product.id]
      this.setState({ basket: newBasket })
      toast.error(`Removed product #id ${product.id}`, {
      });
    }
  }
  updateProductQuantity = (product, quantity) => {
      const updatedProduct = {...product};
      updatedProduct.quantity = quantity;
      
      this.setState({ basket: { ...this.state.basket, [product.id]: updatedProduct  } })
  }
  componentDidMount() {
    axios.get(`products.json`).then(res => this.setState({ products: res.data }));
    axios.get(`categories.json`).then(res => this.setState({ categories: res.data }));
  }
  render() {
    return (
      <Router>
        <ToastContainer />
        <Header />
        <Route render={(props) => <ProductCatalog
          removeFromBasket={this.removeFromBasket}
          addToBasket={this.addToBasket}
          categories={this.state.categories}
          products={this.state.products} />}
          exact
          path="/"
        />
        <Route render={(props) => <BasketSummary  updateProductQuantity={this.updateProductQuantity} removeFromBasket={this.removeFromBasket} basket={Object.values(this.state.basket)} /> } path="/basket-summary" />
      </Router>
    );
  }
}
export default App;
