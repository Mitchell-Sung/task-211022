import withHooks from 'hook-hoc';
import useMoviePopular from '../../hook/useMoviePopular';
import { MoviePopularPage as Component } from './MoviePopularPage.jsx';

const MoviePopularPage = withHooks(useMoviePopular)(Component);

export default MoviePopularPage;
