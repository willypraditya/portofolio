import React from "react";
import About from "../About";
import "./home.scss";
import Background from "../../assets/home-background.jpg";

import Typed from "react-typed";
import { Card, Layout, Image } from "antd";
import { Element } from "react-scroll";

const { Content } = Layout;

const Home = ({ setLoading }) => {
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
            <div className="home__background">
              <Image
                className="home__background__image"
                src={Background}
                preview={false}
                onLoad={() => setLoading(false)}
              />
            </div>
          </div>
          <Card className="home__card" bordered={false}>
            <p className="home__card__title">WILLY PRADITYA</p>
            <p className="home__card__center">Front End Developer</p>
            <p className="home__card__description">
              A Student, interested in {typed()}
            </p>
          </Card>
        </div>
        <About />
      </Content>
    </Element>
  );
};

export default Home;
