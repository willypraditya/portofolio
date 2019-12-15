import React from "react";
import { Layout, Row, Col, Icon } from "antd";
import "./footer.scss";

const { Footer } = Layout;

const FooterLayout = () => (
  <Footer className="footer">
    <Row className="footer__row">
      <Col className="footer__row__left" span={6}>
        <h2 className="footer__row__left__text">Contact: </h2>
      </Col>
      <Col span={18} className="footer__row__right">
        <div className="footer__row__right__contact">
          <a
            className="footer__row__right__contact__social-media"
            href="https://www.linkedin.com/in/willy-praditya/"
            target="_blank"
          >
            <Icon type="linkedin" />
          </a>
          <a
            className="footer__row__right__contact__social-media"
            href="https://github.com/willypraditya"
            target="_blank"
          >
            <Icon type="github" />
          </a>
          <a
            className="footer__row__right__contact__social-media"
            href="https://www.instagram.com/willypraditya"
            target="_blank"
          >
            <Icon type="instagram" />
          </a>
        </div>
      </Col>
    </Row>
  </Footer>
);

export default FooterLayout;
