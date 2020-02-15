import React, { useEffect } from 'react';
import { BookmarkActions } from '../../actions/movieBookmarkActions';
import { BookMarkState } from '../../states/stateBookmarks';
import MovieContent from '../../components/MovieContents/MovieContents';
import { Movie } from '../../actions/MovieType';
import PageName from '../../components/commons/PageName';
import MessageWrapper from '../../components/commons/MessageWrapper';

import styled from 'styled-components';

const MoviesWrapper =　styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  text-align: center;
`
type AppProps = BookMarkState & BookmarkActions;

const BookmarkPage: React.FC<AppProps> = (props: AppProps) => {

  useEffect(() => {
    console.log(props);
  }, []);

  const markOff = (movie: Movie) => {
    console.log(movie);
    props.bookmarkOff(movie);
  }

  return (
    <div>
      <PageName title="Your Favorite List"/>
      <MoviesWrapper className="movies">
        { props.bookmarks.length === 0 ? (
            <MessageWrapper message="None..."/>
          ) : (
          props.bookmarks.map((movie, index) => (
            <MovieContent
              key={`${index}-${movie.Title}`}
              movie={movie}
              mark={markOff}
            />
          ))
        )}
      </MoviesWrapper>
    </div>
  );
}

export default BookmarkPage;
