import * as types from '../constants/moviePopularConstants';

const initialState = {
	isLoading: false,
	moviePopularResults: [],
	error: '',
};

const moviePopularReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.MOVIE_POPULAR_REQUEST:
			return { ...state, isLoading: true };
		case types.MOVIE_POPULAR_SUCCESS:
			return {
				...state,
				isLoading: false,
				moviePopularResults: action.payload,
			};
		// case types.MOVIE_LIKED:
		// 	return {
		// 		...state,
		// 		isLoading: false,
		// 		moviePopularResults: action.payload,
		// 	};
		case types.MOVIE_POPULAR_ERROR:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};

export default moviePopularReducer;
