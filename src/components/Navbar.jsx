import React from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import icon from "../images/cryptocurrency.png";
import { menuItems } from "../config/pageConfig";

const Navbar = () => {
  const { Item } = Menu;

  const menuItem = menuItems.map((menu, index) => {
    return (
      <Item icon={menu.icon} key={index}>
        <Link to={menu.path}>{menu.text}</Link>
      </Item>
    );
  });

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={3} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </div>
      <Menu theme="dark">{menuItem}</Menu>
    </div>
  );
};

export default Navbar;
