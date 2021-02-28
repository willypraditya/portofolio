import React from "react";
import { Card, Row, Col, Avatar } from "antd";
import { Element } from "react-scroll";

import profilePicture from "../../assets/profile-picture.jpg";
import "./about.scss";

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
              A recent graduate of BINUS International University's Computer
              Science program. A former Software Engineer Intern at PT. Modal
              Rakyat Indonesia. Currently working as a Front-End Engineer at PT.
              Payfazz Teknologi Nusantara.
            </p>
            <p className="about__description">
              Have an idea or project you want to talk about? Hit me up!
            </p>
          </Col>
        </Row>
      </Card>
    </Element>
  );
};

export default About;
