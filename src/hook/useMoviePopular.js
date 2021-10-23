import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moviePopularAction from '../redux/actions/moviePopularAction';

const useMoviePopular = () => {
	const dispatch = useDispatch();

	const [moviePopularData, setMoviePopularData] = useState([]);

	const { isLoading, moviePopularResults, error } = useSelector(
		(state) => state.moviePopularStore
	);

	useEffect(() => {
		if (moviePopularResults.length === 0 && error === '') {
			dispatch(moviePopularAction());
		}
	}, [dispatch, error, moviePopularResults]);

	useEffect(() => {
		if (moviePopularResults.length > 0) {
			setMoviePopularData(moviePopularResults);
		}
	}, [moviePopularResults]);

	return { isLoading, moviePopularData, error };
};

export default useMoviePopular;
