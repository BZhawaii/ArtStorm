import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import FilterableTable from './containers/FilterableTable';
import About from './components/About';
import FormArtists from './components/FormArtists';
import ArtistDetails from './components/ArtistDetails';


export default (
	<Route path="/" component={App}>
		<IndexRoute component={FilterableTable} />
		<Route path="/about" component={About} />
		<Route path="/artistDetails" component={ArtistDetails} />
		<Route path="/formArtists" component={FormArtists} />
	</Route>
);
