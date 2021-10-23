import { useState } from 'react';
import { useDispatch } from 'react-redux';
import handleLikeAction from '../../redux/actions/handleLikeAction';
import useStyles from './styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';

const PostMoviePopular = ({ moviePopularData, post }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const [checkedLike, setCheckedLike] = useState(false);

	const handleLike = (e) => {
		if (!checkedLike) {
			setCheckedLike(true);
			post.isLiked = true;
		} else {
			setCheckedLike(false);
			post.isLiked = false;
		}
		dispatch(handleLikeAction(moviePopularData));
	};

	return (
		<div>
			<Card>
				<CardContent>
					<Typography className={classes.title}>{post.title}</Typography>
					<Typography className={classes.movieInfo}>
						<b>Release Date : </b>
						{post.release_date}
					</Typography>
					<Typography className={classes.movieInfo}>
						<b>Vote Average : </b>
						{post.vote_average}
					</Typography>
					<Typography className={classes.movieInfo}>
						<b>Vote Count : </b>
						{post.vote_count}
					</Typography>
					<Typography className={classes.overview}>{post.overview}</Typography>
				</CardContent>
				<CardActions>
					{!checkedLike ? (
						<Button size='small' color='primary' onClick={handleLike}>
							<ThumbUpAltOutlined />
							&nbsp; Like
						</Button>
					) : (
						<Button size='small' color='primary' onClick={handleLike}>
							<ThumbUpAltIcon />
							&nbsp; Like
						</Button>
					)}
				</CardActions>
			</Card>
		</div>
	);
};

// TODO: PropTypes

export default PostMoviePopular;
