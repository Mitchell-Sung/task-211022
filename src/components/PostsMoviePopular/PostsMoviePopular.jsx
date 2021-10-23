import PostMoviePopular from '../PostMoviePopular/PostMoviePopular';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import useStyles from './styles';

const PostsMoviePopular = ({ moviePopularData }) => {
	const classes = useStyles();

	return (
		<Grid className={classes.container} container spacing={3}>
			{moviePopularData?.map((post) => (
				<Grid key={post.id} item lg={12}>
					<PostMoviePopular moviePopularData={moviePopularData} post={post} />
				</Grid>
			))}
		</Grid>
	);
};

PostsMoviePopular.propTypes = {
	posts: PropTypes.array,
};

export default PostsMoviePopular;
