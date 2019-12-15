import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "antd";
import "./index.scss";

import HeaderLayout from "./components/Header";
import FooterLayout from "./components/Footer";
import Welcome from "./components/Welcome";
import About from "./components/About";

const { Content } = Layout;

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <div className="App">
        <Layout>
          <HeaderLayout />
          <Content>
            <Switch>
              <Route path="/" exact component={Welcome} />
              {/* <Route path="/about" component={About} /> */}
            </Switch>
          </Content>
          <FooterLayout />
        </Layout>
      </div>
    </Router>
  );
};

export default App;
