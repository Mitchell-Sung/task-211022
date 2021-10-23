import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MoviePopularPage from './pages/MoviePopularPage';
import MovieLikedPage from './pages/MovieLikedPage';
import Container from '@mui/material/Container';

const App = () => {
	return (
		<BrowserRouter>
			<Container>
				<Header />
				<Switch>
					<Route path='/' exact component={MoviePopularPage} />
					<Route path='/liked' exact component={MovieLikedPage} />
				</Switch>
			</Container>
		</BrowserRouter>
	);
};

export default App;
