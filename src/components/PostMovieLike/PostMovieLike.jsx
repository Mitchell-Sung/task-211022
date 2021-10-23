import useStyles from './styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PostMovieLike = ({ result }) => {
	const classes = useStyles();
	return (
		<Card>
			<CardContent>
				<Typography className={classes.title}>{result.title}</Typography>
				<Typography className={classes.movieInfo}>
					<b>Release Date : </b>
					{result.release_date}
				</Typography>
				<Typography className={classes.movieInfo}>
					<b>Vote Average : </b>
					{result.vote_average}
				</Typography>
				<Typography className={classes.movieInfo}>
					<b>Vote Count : </b>
					{result.vote_count}
				</Typography>
				<Typography className={classes.overview}>{result.overview}</Typography>
			</CardContent>
		</Card>
	);
};

// TODO: PropTypes

export default PostMovieLike;
