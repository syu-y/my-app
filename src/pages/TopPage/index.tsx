import React, { useEffect } from 'react';
import Search from '../../components/Search'
import fetcher from '../../utils/fetcher';
import { Movie } from '../../actions/MovieType';
import { MovieState } from '../../states/stateMovie';
import { MovieActions } from '../../actions/movieActions';
import config from '../../config'
import MovieContent from '../../components/MovieContents/MovieContents';
import styled from 'styled-components';
import { BookMarkState } from '../../states/stateBookmarks';
import { BookmarkActions } from '../../actions/movieBookmarkActions';
import PageName from '../../components/commons/PageName';
import MessageWrapper from '../../components/commons/MessageWrapper';
// const CONNPASS_API_URL = "https://connpass.com/api/v1/event/";
const MOVIE_API_URL = "https://www.omdbapi.com/?s=iron&apikey=" + config.apiKey;

const MoviesWrapper =　styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
`

type ResponseType = {
  Search: Movie[]
  totalResults: number
  Response: string
}

type AppProps = MovieState & MovieActions & BookMarkState & BookmarkActions;

const TopPage: React.FC<AppProps> = (props: AppProps) => {
  const NotFoundMessage = "Not Found!" as const;

  useEffect(() => {
    console.log(props)
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
    }

    const markOn = (movie: Movie) => {
      // console.log(movie);
      props.bookmarkOn(movie);
    }

    return (
      <div>
      <PageName title="Movie Search!"/>
      <Search search={search} />
      <MoviesWrapper className="movies">
        { props.loading && !props.errorMessage ? (
          <MessageWrapper message="loading..."/>
        ) : props.errorMessage ? (
          <MessageWrapper message={props.errorMessage}/>
        ) : (
          props.movies.map((movie, index) => (
            <MovieContent
              key={`${index}-${movie.Title}`}
              movie={movie}
              mark={markOn}
            />
          ))
        )}
      </MoviesWrapper>
    </div>
  );
}

export default TopPage;
