import * as types from '../constants/moviePopularConstants';

const handleLikeAction = (moviePopularData) => async (dispatch) => {
	if (moviePopularData) {
		dispatch({
			type: types.MOVIE_POPULAR_SUCCESS,
			payload: moviePopularData,
		});
	}
};

export default handleLikeAction;
