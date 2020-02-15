import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux'
import TopPage from '.'
import { Movie } from '../../actions/MovieType';
import { movieActions } from '../../actions/movieActions';
import { movieBookmarkActions } from '../../actions/movieBookmarkActions';
import { ReduxState } from '../../store';

const mapStateToProps = (reduxState: ReduxState) => {
  // console.log("TopPage movie" + reduxState.movie);
  // console.log("TopPage bookmark" + reduxState.bookmark);
  return Object.assign({}, reduxState.movie, reduxState.bookmark);
}

const mapDispatchToProps = (dispatch: Dispatch<Action<void | (string | null ) | Array<Movie> | Movie>>) => {
  return {
    searchMovies: () => dispatch(movieActions.searchMovies()),
    requestSuccess: (v: Array<Movie>) => dispatch(movieActions.requestSuccess(v)),
    requestFailure: (v: string | null) => dispatch(movieActions.requestFailure(v)),
    bookmarkOn: (v: Movie) => dispatch(movieBookmarkActions.bookmarkOn(v))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopPage);
