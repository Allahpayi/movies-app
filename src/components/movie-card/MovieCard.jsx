import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Button, Card } from "antd";
import { useToasts } from "react-toast-notifications";
import classes from "./MovieCard.module.scss";
import { Heart, Star } from "../../assets/icons/index";
import { HeartOutline } from "../../assets/icons/index";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addWatchList,
  removeWatchList,
} from "../../store/actions/watchListActions";

const { Meta } = Card;

const MovieCard = ({ movie }) => {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
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

  const getRating = () => {
    let rating;
    if (movie.vote_average >= 8 && movie.vote_average <= 10) {
      rating = (
        <>
          <span className={classes.rating}>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </span>
        </>
      );
      return rating;
    }
    if (movie.vote_average >= 6 && movie.vote_average < 8) {
      rating = (
        <>
          <span className={classes.rating}>
            <Star />
            <Star />
            <Star />
            <Star />
          </span>
          <Star />
        </>
      );
      return rating;
    }
    if (movie.vote_average >= 4 && movie.vote_average < 6) {
      rating = (
        <>
          <span className={classes.rating}>
            <Star />
            <Star />
            <Star />
          </span>
          <Star />
          <Star />
        </>
      );
      return rating;
    }
    if (movie.vote_average >= 2 && movie.vote_average < 4) {
      rating = (
        <>
          <span className={classes.rating}>
            <Star /> <Star />
          </span>
          <Star />
          <Star />
          <Star />
        </>
      );
      return rating;
    }
    if (movie.vote_average < 2) {
      rating = (
        <>
          <span className={classes.rating}>
            <Star />
          </span>
          <Star />
          <Star />
          <Star />
          <Star />
        </>
      );
      return rating;
    }
  };

  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
      }
    >
      <Link to={"/movie/" + movie.id}>
        <Meta title={movie.original_title} />
      </Link>
      <div className={classes.cart_content}>
        <div className="raiting">{getRating()}</div>
        <Button
          onClick={addToWatchList}
          type="link"
          shape="circle"
          className={classes.whatch_list}
          icon={added ? <Heart /> : <HeartOutline />}
        ></Button>
      </div>
    </Card>
  );
};
MovieCard.propTypes = {
  movie: PropTypes.object,
};
export default MovieCard;
