import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";
import classes from "./WatchList.module.scss";
import MovieCard from "../../components/movie-card/MovieCard";
import { useNavigate } from "react-router-dom";

const WatchList = () => {
  const watchList = useSelector((state) => state.watchList);
  const navigate = useNavigate();
  useEffect(() => {
    if (watchList.length == 0) navigate("/");
  }, [watchList]);

  return (
    <Row>
      {watchList?.map((movie) => (
        <Col
          className={classes.gutter_box}
          key={movie.id}
          sm={24}
          md={12}
          lg={6}
        >
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

export default WatchList;
