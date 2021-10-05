import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Car from './pages/Car';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<section>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/cars/builder/:car/:step" component={Car} />
						<Route render={() => <h1>404: page not found</h1>} />
					</Switch>
				</section>
			</div>
		</Router>
	);
}

export default App;
