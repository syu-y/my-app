import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Movie } from '../../actions/MovieType';
import styled from 'styled-components';
import { Link } from '@material-ui/core';

const MovieCardWrapper =　styled(Card)`
  padding: 5px 25px 10px 25px;
  margin: 10px;
  width: 345px;
`

const MoviePosterWrapper =　styled(CardMedia)`
  height: 500px;
`

const MovieCardContentWrapper =　styled(CardContent)`
  padding-top: 30px;
  height: 150px;
`

type LocalProps = {
    movie: Movie
    mark: (targetMovie: Movie) => void
};

const MovieDetails: React.FC<LocalProps> = (props: LocalProps) => {

  const callBookmarkFunction = () => {
    // console.log("bookmark!");
    console.log(props);
    props.mark(props.movie);
    // resetInputValue();
  }

  return (
      <MovieCardWrapper>
        <CardActionArea>
          <MoviePosterWrapper
            className="media"
            image={props.movie.Poster}
            title={props.movie.Title}
            />
          <MovieCardContentWrapper>
            <Typography gutterBottom variant="h5" component="h2">
              {props.movie.Title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.movie.Plot !== "N/A" ? props.movie.Plot : "Sorry, Could not find this plot..."}
            </Typography>
          </MovieCardContentWrapper>
        </CardActionArea>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Rate : {(parseInt(props.movie.imdbRating)/2).toFixed()}</Typography>
          <Rating
            name="half-customized-10"
            max={5}
            precision={1}
            defaultValue={parseInt(props.movie.imdbRating)/2}
            readOnly
            />
        </Box>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={callBookmarkFunction}
            >
            Remove
          </Button>
        </CardActions>
      </MovieCardWrapper>
  );
}

export default MovieDetails;
