import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Product catalog</Link>
          </li>
          <li>
            <Link to="/basket-summary">Basket summary</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={ProductCatalog} />
        <Route path="/basket-summary" component={BasketSummary} />
      </div>
    </Router>
  );
}

function ProductCatalog() {
  return (
    <div>
      <h2>Product Catalog</h2>
    </div>
  );
}

function BasketSummary () {
  return (
    <div>
      <h2>Basket Summary</h2>
    </div>
  );
}

export default BasicExample;
