import Container from '@mui/material/Container';
import filterLikes from '../../libs/filterLikes';
import PostsMovieLike from '../../components/PostsMovieLike/PostsMovieLike.jsx';
import PropTypes from 'prop-types';

const MovieLikedPage = ({ isLoading, moviePopularData, error }) => {
	const results = filterLikes(moviePopularData);

	return (
		<Container>
			{/* TODO: Loading */}
			<PostsMovieLike results={results} />
			{/* TODO: Error Message */}
		</Container>
	);
};

// TODO: PropTypes

export { MovieLikedPage };
