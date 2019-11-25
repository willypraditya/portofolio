import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import "./header.scss";
import logo from "../../assets/WP.png";

const { Header } = Layout;

const HeaderLayout = () => (
  <Header className="header">
    <img className="header__logo" src={logo}></img>
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      className="header__menu"
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item className="header__menu__item" key="1">
        <Link to="/">
          <h2 className="header__menu__item__text">WELCOME</h2>
        </Link>
      </Menu.Item>
      <Menu.Item className="header__menu__item" key="2">
        <Link to="/about">
          <h2 className="header__menu__item__text">ABOUT</h2>
        </Link>
      </Menu.Item>
    </Menu>
  </Header>
);

export default HeaderLayout;
