import withHooks from 'hook-hoc';
import useMoviePopular from '../../hook/useMoviePopular';
import { MovieLikedPage as Component } from './MovieLikedPage.jsx';

const MovieLikedPage = withHooks(useMoviePopular)(Component);

export default MovieLikedPage;
