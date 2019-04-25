import React from "react";
import axios from "axios";
import ProductCatalog from "./components/ProductCatalog";
import BasketSummary from "./components/BasketSummary";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    products: [],
    categories: []
  };
  componentDidMount() {
    axios.get(`products.json`).then(res => this.setState({ products: res.data }));
    axios.get(`categories.json`).then(res =>this.setState({ categories: res.data }));
  }
  render() {
    return (
      <Router>
        <Header />
        <Route render={(props) => <ProductCatalog  categories={this.state.categories} products={this.state.products} />} exact path="/" />
        <Route path="/basket-summary" component={BasketSummary} />
      </Router>
    );
  }
}
export default App;
