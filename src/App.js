import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import "./index.scss";

import HeaderLayout from "./components/Header";
import FooterLayout from "./components/Footer";
import Welcome from "./components/Welcome";
import About from "./components/About";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="App">
        <Layout>
          <HeaderLayout />
          <Switch>
            <Route path="/" exact component={Welcome}></Route>
            <Route path="/about" component={About}></Route>
          </Switch>
          <FooterLayout />
        </Layout>
      </div>
    </Router>
  );
};

export default App;
