import React from "react";
import ProductCatalog from "./components/ProductCatalog";
import BasketSummary from "./components/BasketSummary";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={ProductCatalog} />
      <Route path="/basket-summary" component={BasketSummary} />
    </Router>
  );
}

export default App;
