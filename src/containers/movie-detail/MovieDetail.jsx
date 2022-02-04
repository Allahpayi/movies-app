import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Col, Row, Space, Typography } from "antd";
import { useToasts } from "react-toast-notifications";
import classes from "./MovieDetail.module.scss";
import { loadMovies } from "../../store/actions/moviesActions";
import {
  addWatchList,
  removeWatchList,
} from "../../store/actions/watchListActions";
import { Heart, HeartOutline, Play } from "../../assets/icons/index";

const { Text } = Typography;

const MovieDetail = () => {
  const { addToast } = useToasts();
  const params = useParams();

  const dispatch = useDispatch();
  const movie = useSelector((state) => state.allMovies.movies);
  const watchList = useSelector((state) => state.watchList);
  const [added, setAdded] = useState(false);

  const addToWatchList = () => {
    let added = watchList.find((watchMovie) => watchMovie.id === movie.id);
    if (!added) {
      addToast(movie.title + " added to the watch list.", {
        appearance: "success",
        autoDismiss: true,
      });
      dispatch(addWatchList(movie));
      setAdded(true);
    } else {
      addToast(movie.title + " delete from watch list.", {
        appearance: "error",
        autoDismiss: true,
      });
      dispatch(removeWatchList(movie.id));
      setAdded(false);
    }
  };
  const isWatchList = () => {
    let added = watchList.find((watchMovie) => watchMovie.id === movie.id);
    if (added) {
      setAdded(true);
    }
  };
  useEffect(() => {
    isWatchList();
  }, [watchList]);

  useEffect(() => {
    dispatch(loadMovies(params.id));
  }, [params.id]);
  return (
    <Row gutter={20}>
      <Col sm={24} lg={12}>
        <img
          alt="example"
          className={classes.banner_img}
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        />
      </Col>
      <Col sm={24} lg={12}>
        <Space direction="vertical">
          <h1>{movie.title}</h1>
          <Space>
            <Badge
              color="blue"
              text={
                <Text type="secondary"> {movie.vote_average + " / 10"}</Text>
              }
            />
            <Badge
              color="blue"
              text={<Text type="secondary">{movie.runtime + " min"}</Text>}
            />
            <Badge
              color="blue"
              text={<Text type="secondary"> {movie.release_date}</Text>}
            />
          </Space>
          <Text type="secondary">{movie.tagline}</Text>
          <Space className={classes.flex}>
            <Space direction="vertical">
              <h1>GENRE</h1>
              <Space style={{ flexWrap: "wrap", width: "80%" }}>
                {movie.genres?.map((genre) => (
                  <Badge
                    style={{ backgroundColor: "#161853" }}
                    key={genre.id}
                    count={genre.name}
                  />
                ))}
              </Space>
            </Space>
            <Space direction="vertical">
              <h1>LANGUAGE</h1>
              <Space>
                {movie.spoken_languages?.map((lang) => (
                  <Badge
                    style={{
                      backgroundColor: "#ec255a",
                    }}
                    key={lang.iso_639_1}
                    count={lang.english_name}
                  />
                ))}
              </Space>
            </Space>
          </Space>
          <Text>{movie.overview}</Text>
          <Space>
            <Button
              href={movie.homepage}
              target="_blank"
              type="primary"
              icon={<Play />}
            >
              Watch Trailer
            </Button>

            <Button
              onClick={addToWatchList}
              type="link"
              shape="circle"
              className={classes.whatch_list}
            >
              {added ? <Heart /> : <HeartOutline />}
            </Button>
          </Space>
        </Space>
      </Col>
    </Row>
  );
};

export default MovieDetail;
