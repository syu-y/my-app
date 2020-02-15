// import React, { useEffect } from 'react';
// import { push } from 'connected-react-router'
// import { Movie }from '../../actions/MovieType';
// import styled from 'styled-components';
// import { Action } from 'typescript-fsa';
// import { Dispatch } from 'redux';
// import { connect } from 'react-redux'
// const DEFAULT_PLACEHOLDER_IMAGE =
//   "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

// type LocalProps = {
//   movie: Movie
//   mark: (targetMovie: Movie) => void
// };

// const MovieWrapper =　styled.div`
//   padding: 5px 25px 10px 25px;
//   margin: 10px;
//   max-width: 25%;

//   h2 {
//     max-width: 200px;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     white-space: nowrap;
//   }
// `
// type AppProps = LocalProps;

// const MovieContent: React.FC<AppProps> = (props) => {
//   const poster = props.movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : props.movie.Poster;

//     const callBookmarkFunction = () => {
//       // console.log("bookmark!");
//       console.log(props);
//       props.mark(props.movie);
//       // resetInputValue();
//     }

//   return (
//     <MovieWrapper className="movie" id={props.movie.imdbID}>
//       <h2>{props.movie.Title}</h2>
//       <div>
//       <img
//         src={poster}
//         alt={`The movie titled: ${props.movie.Title}`}
//         width="200px"
//         height="300"
//         onClick={callBookmarkFunction}
//         />
//       </div>
//     </MovieWrapper>
//   );
// };

// export default MovieContent;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Movie } from '../../actions/MovieType';
import styled from 'styled-components';

const useStyles = makeStyles({
  root: {
    alignContent: "center",
    width: 345,
    margin: "10px",
  },
  media: {
    height: 500,
  },
});

const MovieCardWrapper =　styled(Card)`
  padding: 5px 25px 10px 25px;
  margin: 10px;
  width: 345px;
`

const MoviePosterWrapper =　styled(CardMedia)`
  height: 500px;
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
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.movie.Title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={callBookmarkFunction}
            >
            Favorite
          </Button>
        </CardActions>
      </MovieCardWrapper>
  );
}

export default MovieDetails;
