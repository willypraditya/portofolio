import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Button, Icon, Drawer } from "antd";
import "./header.scss";
import logo from "../../assets/WP.png";

const { Header } = Layout;

const HeaderLayout = () => {
  const [showDrawer, setShowDrawer] = useState(false);

  const onClickDrawer = () => {
    setShowDrawer(prevState => !prevState);
  };

  return (
    <Header className="header">
      <img className="header__logo" src={logo}></img>
      <Button className="header__toggle" type="link" onClick={onClickDrawer}>
        <Icon className="header__toggle__icon" type="menu"></Icon>
      </Button>
      <Drawer
        placement="top"
        closable={true}
        onClose={onClickDrawer}
        visible={showDrawer}
        className="header__drawer"
      >
        <Menu
          className="header__drawer__menu"
          mode="vertical"
          onClick={onClickDrawer}
        >
          <Menu.Item className="header__drawer__menu__item" key="1">
            <Link to="/">
              <h1 className="header__drawer__menu__item__text">WELCOME</h1>
            </Link>
          </Menu.Item>
          <Menu.Item className="header__drawer__menu__item" key="2">
            <Link to="/about">
              <h1 className="header__drawer__menu__item__text">ABOUT</h1>
            </Link>
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default HeaderLayout;
