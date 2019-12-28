import React from "react";
import About from "../About";
import "./home.scss";

import Flip from "react-reveal/Flip";
import Typed from "react-typed";
import { Card, Layout } from "antd";
import { Element } from "react-scroll";

const { Content } = Layout;

const Home = () => {
  const typed = () => {
    return (
      <Typed
        strings={["tech.", "traveling.", "#senja."]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    );
  };

  return (
    <Element name="home">
      <Content>
        <div className="home">
          <div className="home__mask">
            <div className="home__background"></div>
          </div>
          <Card className="home__card" bordered={false}>
            {/* <Flip left cascade> */}
            <p className="home__card__title">WILLY PRADITYA</p>
            <p className="home__card__center">Front End Developer</p>
            <p className="home__card__description">
              A Student, interested in {typed()}
            </p>
            {/* </Flip> */}
          </Card>
        </div>
        <About />
      </Content>
    </Element>
  );
};

export default Home;
