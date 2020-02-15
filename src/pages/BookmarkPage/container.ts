import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux'
import BookmarkPage from './index'
import { Movie } from '../../actions/MovieType';
import { movieBookmarkActions } from '../../actions/movieBookmarkActions';
import { ReduxState } from '../../store';

const mapStateToProps = (reduxState: ReduxState) => {
  // console.log("BookmarkPage bookmark" + reduxState.bookmark);
  return Object.assign({}, reduxState.bookmark);
}

const mapDispatchToProps = (dispatch: Dispatch<Action<Movie>>) => {
  return {
    bookmarkOff: (v: Movie) => dispatch(movieBookmarkActions.bookmarkOff(v))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookmarkPage);
