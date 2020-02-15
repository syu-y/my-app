import React, { useEffect } from 'react';
import Search from '../../components/Search'
import fetcher from '../../utils/fetcher';
import { Movie } from '../../actions/MovieType';
import { MovieState } from '../../states/stateMovie';
import { MovieActions } from '../../actions/movieActions';
import config from '../../config'
import MovieContent from '../../components/MovieContents/MovieContents';
import styled from 'styled-components';

// const CONNPASS_API_URL = "https://connpass.com/api/v1/event/";
const MOVIE_API_URL = "https://www.omdbapi.com/?s=iron&apikey=" + config.apiKey;

const PageName =　styled.h1`
  margin: auto;
  padding: 30px 20px 10px 20px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 48px;
`

const MoviesWrapper =　styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
`

const　MessageWrapper =　styled.span`
  margin: auto;
  padding: 20px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 32px;
`

type ResponseType = {
  Search: Movie[]
  totalResults: number
  Response: string
}

type AppProps = MovieState & MovieActions;

const TopPage: React.FC<AppProps> = (props: AppProps) => {
  const NotFoundMessage = "Not Found!" as const;

  useEffect(() => {

    fetcher<ResponseType>(
      MOVIE_API_URL,
      {
        headers: { }
      }
    )
    .then(items => {
      if(items.Search){
        console.log("Success!");
        console.log(items);
        props.requestSuccess(items.Search);
      } else {
        console.log("Failure!");
        props.requestFailure(NotFoundMessage);
      }
    })
    .catch(err => {
      props.requestFailure(err);
    })
  }, []);

  const search = (searchValue: string) => {
    props.searchMovies();

    fetcher<ResponseType>(
      `https://www.omdbapi.com/?s=${searchValue}&apikey=${config.apiKey}`,
      {
        headers: { }
      }
      )
      .then(items => {
        if(items.Search){
          props.requestSuccess(items.Search);
        } else {
          props.requestFailure(NotFoundMessage);
        }
      })
      .catch(err => {
        props.requestFailure(err);
      })
      console.log("props.movies : " + props.movies)
    }

    return (
      <div>
      <PageName>Movie Search Service</PageName>
      <Search search={search} />
      <MoviesWrapper className="movies">
        { props.loading && !props.errorMessage ? (
          <MessageWrapper>
            loading...
          </MessageWrapper>
        ) : props.errorMessage ? (
          <MessageWrapper className="errorMessage">
            {props.errorMessage}
          </MessageWrapper>
        ) : (
          props.movies.map((movie, index) => (
            <MovieContent key={`${index}-${movie.Title}`} movie={movie}/>
          ))
        )}
      </MoviesWrapper>
    </div>
  );
}

export default TopPage;
