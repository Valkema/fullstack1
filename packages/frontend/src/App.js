import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Superheroes from "./pages/Superheroes";
import Dark from "./components/Dark";

function App() {
	return (
		<>
			<h1>Make your choice!</h1>
			<Router>
				<nav>
					<ul>
						<li>
							<Link to="/darkside">Dark side</Link>
						</li>
						<li>
							<Link to="/superheroes">Superheroes</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route path="/darkside" component={Dark} />
					<Route path="/superheroes" component={Superheroes} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
