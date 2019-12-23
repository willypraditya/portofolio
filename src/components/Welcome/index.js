import React from "react";
import reactLogo from "../../assets/react-logo.svg";
import webpackLogo from "../../assets/webpack-logo.svg";
import vscodeLogo from "../../assets/vscode-logo.svg";
import sassLogo from "../../assets/sass-logo.svg";

import "./welcome.scss";

import { Card, Layout, Row, Col } from "antd";

const { Content } = Layout;

const Welcome = () => {
  return (
    <Content>
      <div className="home">
        <div className="home__mask">
          <div className="home__background"></div>
        </div>
        <Card className="home__card" title="WILLY PRADITYA" bordered={false}>
          <p className="home__card__center">Front End Developer</p>
          <p className="home__card__description">
            A Student, currently working at PT. Payfazz Teknologi Nusantara,
            interested in techs.
          </p>
        </Card>
      </div>
      <Card className="home__tools" bordered={false}>
        <p className="home__tools__title">Development Tools</p>
        <Row type="flex" justify="space-around">
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <img className="home__tools__vscode" src={vscodeLogo} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <img className="home__tools__react" src={reactLogo} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <img className="home__tools__webpack" src={webpackLogo} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <img className="home__tools__sass" src={sassLogo} />
          </Col>
        </Row>
      </Card>
    </Content>
  );
};

export default Welcome;
