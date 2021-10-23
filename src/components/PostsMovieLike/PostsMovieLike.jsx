import PostMovieLike from '../PostMovieLike/PostMovieLike';
import Grid from '@mui/material/Grid';
import useStyles from './styles';
import PropTypes from 'prop-types';

const PostsMovieLike = ({ results }) => {
	const classes = useStyles();

	return (
		<Grid className={classes.container} container spacing={3}>
			{results?.map((result) => (
				<Grid key={result.id} item lg={12}>
					<PostMovieLike result={result} />
				</Grid>
			))}
		</Grid>
	);
};

PostsMovieLike.propTypes = {
	posts: PropTypes.array,
};

export default PostsMovieLike;
