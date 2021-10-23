import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import moviePopularReducer from './redux/reducers/moviePopularReducer';

const reducers = combineReducers({
	moviePopularStore: moviePopularReducer,
});

const store = createStore(
	reducers,
	{},
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
