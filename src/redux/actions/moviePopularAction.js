import * as types from '../constants/moviePopularConstants';
import axios from 'axios';
import { API_KEY_URL } from '../../config';

const moviePopularAction = () => async (dispatch) => {
	dispatch({ type: types.MOVIE_POPULAR_REQUEST });

	try {
		const {
			data: { results },
		} = await axios.get(API_KEY_URL);

		const resultData = results.reduce((acc, curr, index) => {
			curr['isLiked'] = false;
			acc.push(curr);
			return acc;
		}, []);

		dispatch({ type: types.MOVIE_POPULAR_SUCCESS, payload: resultData });
	} catch (error) {
		dispatch({ type: types.MOVIE_POPULAR_ERROR, payload: error });
	}
};

export default moviePopularAction;
