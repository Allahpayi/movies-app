import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "antd";
import classes from "./MovieList.module.scss";
import { loadMovies } from "../../store/actions/moviesActions";
import MovieCard from "../../components/movie-card/MovieCard";

const MovieList = () => {
  const location = useLocation();

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.allMovies.movies);

  useEffect(() => {
    if (location.pathname.includes("latest")) {
      dispatch(loadMovies("latest"));
    }
    if (location.pathname.includes("now-playing")) {
      dispatch(loadMovies("now_playing"));
    }
    if (location.pathname.includes("popular")) {
      dispatch(loadMovies("popular"));
    }
    if (location.pathname.includes("top-rated")) {
      dispatch(loadMovies("top_rated"));
    }
    if (location.pathname.includes("upcoming")) {
      dispatch(loadMovies("upcoming"));
    }
  }, [location]);
  return (
    <Row>
      {movies?.results?.map((movie) => (
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

export default MovieList;
