import React from "react";
import background from "../../assets/home-background.png";
import logo from "../../assets/logo.svg";
import "./welcome.scss";

import { Card } from "antd";
const { Meta } = Card;

const Welcome = () => {
  return (
    <div className="home">
      <div className="home__mask">
        <div className="home__background"></div>
      </div>
      <Card title="WILLY PRADITYA" className="home__card" bordered={false}>
        <p className="home__card__center">Front-End Web Developer</p>
        <p className="home__card__description">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </Card>
    </div>
  );
};

export default Welcome;
