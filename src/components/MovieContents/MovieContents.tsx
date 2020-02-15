import React from 'react';
import { Movie }from '../../actions/MovieType';
import styled from 'styled-components';

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


type Props = {
  movie: Movie
};

const MovieWrapper =　styled.div`
  padding: 5px 25px 10px 25px;
  margin: 10px;
  max-width: 25%;

  h2 {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

const MovieContent: React.FC<Props> = (props) => {
  const poster = props.movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : props.movie.Poster;
  return (
    <MovieWrapper className="movie" id={props.movie.imdbID}>
      <h2>{props.movie.Title}</h2>
      <div>
      <img src={poster} alt={`The movie titled: ${props.movie.Title}`} width="200px" height="300"/>
      </div>
    </MovieWrapper>
  );
};

export default MovieContent;
