import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Layout } from "antd";
import "./index.scss";

import HeaderLayout from "./components/Header";
import FooterLayout from "./components/Footer";
import Home from "./components/Home";
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
              <Route path="/" exact component={Home} />
              <Redirect to="/" />
            </Switch>
          </Content>
          <FooterLayout />
        </Layout>
      </div>
    </Router>
  );
};

export default App;
