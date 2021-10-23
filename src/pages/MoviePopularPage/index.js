import withHooks from 'hook-hoc';
import useMoviePopular from '../../hook/useMoviePopular';
import { MoviePopularPage as Component } from './MoviePopularPage.jsx';
//새로운 컴포넌트를 만드는 것 (합쳐서)

const MoviePopularPage = withHooks(useMoviePopular)(Component);

export default MoviePopularPage;
