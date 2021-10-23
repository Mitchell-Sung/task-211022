import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import useStyles from './styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ThumbUpAltOutlined from '@mui/icons-material/ThumbUpAltOutlined';

const Header = () => {
	const classes = useStyles();
	const history = useHistory();

	const [showLikedBtn, setShowLikedBtn] = useState(true);

	const openLikedPage = () => {
		setShowLikedBtn(false);
		history.push('/liked');
	};

	return (
		<Box className={classes.box}>
			<AppBar className={classes.appBar}>
				<Toolbar>
					<Typography
						component={Link}
						to='/'
						className={classes.logo}
						onClick={() => setShowLikedBtn(true)}
					>
						Movie App
					</Typography>
					{showLikedBtn ? (
						<Button
							variant='outlined'
							color='inherit'
							startIcon={<ThumbUpAltOutlined />}
							onClick={openLikedPage}
						>
							Liked
						</Button>
					) : null}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
