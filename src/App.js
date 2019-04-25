import React from "react";
import axios from "axios";
import ProductCatalog from "./components/ProductCatalog";
import BasketSummary from "./components/BasketSummary";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    products: []
  };
  componentDidMount() {
    axios.get(`products.json`).then(res => {
      console.log("products");
      this.setState({
        products: res.data
      });
      console.log(res);
    });

    axios.get(`categories.json`).then(res => {
      console.log("categories");
      console.log(res);
      
      console.log(this.list_to_tree(res.data));
    });
  }
  render() {
    return (
      <Router>
        <Header />
        <Route exact path="/" component={ProductCatalog} />
        <Route path="/basket-summary" component={BasketSummary} />
      </Router>
    );
  }
}
export default App;
