import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Home} />
		
	</Routes>
	</Router>
);
}

export default App;
