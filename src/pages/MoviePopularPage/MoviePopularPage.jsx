import PostsMoviePopular from '../../components/PostsMoviePopular/PostsMoviePopular';
import Container from '@mui/material/Container';

const MoviePopularPage = ({ isLoading, moviePopularData, error }) => {
	return (
		<Container>
			{/* TODO: Error Message */}
			{/* TODO: Loading */}
			<PostsMoviePopular moviePopularData={moviePopularData} />
		</Container>
	);
};
// TODO: PropTypes

export { MoviePopularPage };
