import React from "react";
import { Card, Row, Col, Avatar } from "antd";
import { Element } from "react-scroll";

import profilePicture from "../../assets/profile-picture.jpg";
import "./about.scss";

import reactLogo from "../../assets/react-logo.svg";
import webpackLogo from "../../assets/webpack-logo.svg";
import vscodeLogo from "../../assets/vscode-logo.svg";
import sassLogo from "../../assets/sass-logo.svg";

const About = () => {
  return (
    <Element name="about">
      <Card className="about" bordered={false}>
        <p className="about__title">About</p>
        <Row type="flex" justify="center">
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={2}>
            <Avatar
              className="about__picture"
              shape="square"
              size={150}
              src={profilePicture}
            />
          </Col>
          <Col xs={24} sm={24} md={20} lg={20} xl={20} xxl={16}>
            <p className="about__description">
              A Front End Developer from Jakarta, currently working as a Junior
              Front End Engineer at PT. Payfazz Teknologi Nusantara. An active
              student studying Computer Science at BINUS International
              University.
            </p>
            <p className="about__description">
              Have an idea or project you want to talk about? Hit me up!
            </p>
          </Col>
        </Row>
        {/* <Row type="flex" justify="space-around">
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <img className="about__tools__vscode" src={vscodeLogo} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <img className="about__tools__react" src={reactLogo} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <img className="about__tools__webpack" src={webpackLogo} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <img className="about__tools__sass" src={sassLogo} />
        </Col>
      </Row> */}
      </Card>
    </Element>
  );
};

export default About;
