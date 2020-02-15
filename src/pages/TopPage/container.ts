import { Action } from 'typescript-fsa';
import { Dispatch } from 'redux';
import { connect } from 'react-redux'
import TopPage from '.'
import { Movie } from '../../actions/MovieType';
import { MovieState } from '../../states/stateMovie';
import { movieActions } from '../../actions/movieActions';
import { ReduxState } from '../../store';

const mapStateToProps = (reduxState: ReduxState) => {
  return Object.assign({}, reduxState.movie);
}

function mapDispatchToProps(dispatch: Dispatch<Action<void | (string | null )| Array<Movie>>>) {
  return {
    searchMovies: () => dispatch(movieActions.searchMovies()),
    requestSuccess: (v: Array<Movie>) => dispatch(movieActions.requestSuccess(v)),
    requestFailure: (v: string | null) => dispatch(movieActions.requestFailure(v))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopPage);
