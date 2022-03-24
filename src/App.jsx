import "./App.css";
import NavBar from "./components/navBar";
import { React } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Products from "./components/Components/products";
import Post from "./components/Components/post";
import Home from "./components/Components/home";
import Dashboard from "./components/Components/dashboard";
import ProductDetails from "./components/Components/productDetails";
import NotFound from "./components/Components/not-found";

function App() {
  return (
    <div>
      <NavBar />
      <div className="content">
        <Switch>
          <Route path="/products/:id" component={ProductDetails}></Route>
          <Route
            path="/products"
            render={(props) => (
              <Products productList={["Milk", "IncCream"]} {...props} />
            )}
          ></Route>
          <Route path="/post/:year?/:month?" component={Post}></Route>
          <Route path="/admin" component={Dashboard}></Route>
          <Redirect from="/messages" to="/"></Redirect>
          <Route path="/" exact component={Home}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect to="/not-found"></Redirect>
        </Switch>
      </div>
    </div>
  );
}

export default App;
