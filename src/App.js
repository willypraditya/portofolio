import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Layout, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import "./index.scss";

import HeaderLayout from "./components/Header";
import FooterLayout from "./components/Footer";
import Home from "./components/Home";
const { Content } = Layout;

const App = () => {
  const [loading, setLoading] = useState(true);

  const antIcon = <LoadingOutlined className="loading-icon" spin />;

  return (
    <Router>
      <Spin
        indicator={antIcon}
        className="loading"
        style={{ display: loading ? "block" : "none" }}
      />
      <div className="App" style={{ display: loading ? "none" : "block" }}>
        <Layout>
          <HeaderLayout />
          <Content>
            <Switch>
              <Route
                path="/portofolio"
                exact
                render={() => <Home setLoading={setLoading} />}
              />
              <Redirect to="/portofolio" />
            </Switch>
          </Content>
          <FooterLayout />
        </Layout>
      </div>
    </Router>
  );
};

export default App;
