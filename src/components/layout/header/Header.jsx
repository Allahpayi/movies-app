import { Col, Layout, Row } from "antd";
import React from "react";
import classes from "./Header.module.scss";
import Navbar from "./Navbar/Navbar";
import { Heart } from "../../../assets/icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Layout.Header
      style={{
        position: "fixed",
        zIndex: 1,
        width: "100%",
        padding: 0,
        backgroundColor: "#161853",
      }}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Navbar />
        </Col>
        <Col span={12}>
          <Link className={classes.heart_button} to="/movie/watch-list">
            <Heart />
          </Link>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
