import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./Navbar.module.scss";
import { Menu } from "antd";

const Navbar = () => {
  const [current, setCurrent] = useState("latest");
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    setCurrent(path);
  }, [location]);

  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={handleClick}
      theme="dark"
      selectedKeys={[current]}
      mode="horizontal"
      className={classes.menu}
    >
      <Menu.Item key="now-playing">
        <Link to="/movie/now-playing"> Now Playing </Link>
      </Menu.Item>
      <Menu.Item key="popular">
        <Link to="/movie/popular"> Popular </Link>
      </Menu.Item>
      <Menu.Item key="top-rated">
        <Link to="/movie/top-rated"> Top Rated </Link>
      </Menu.Item>
      <Menu.Item key="upcoming">
        <Link to="/movie/upcoming"> Upcoming </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
