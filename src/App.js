import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar";
import "./App.css";
import { routeItems, footers } from "./config/pageConfig";

const App = () => {
  const { Title } = Typography;
  const routeItem = routeItems.map((route, index) => {
    return (
      <Route exact path={route.path} key={index} element={route.component} />
    );
  });

  const footerItem = footers.map((footer, index) => {
    return (
      <Link to={footer.path} key={index}>
        {footer.text}
      </Link>
    );
  });

  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>{routeItem}</Routes>
          </div>
        </Layout>
        <div className="footer">
          <Title level={5} style={{ color: "white", textAlign: "center" }}>
            Cryptoverse <br />
            All rights reserved
          </Title>
          <Space>{footerItem}</Space>
        </div>
      </div>
    </div>
  );
};

export default App;
