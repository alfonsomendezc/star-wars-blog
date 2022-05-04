import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { People } from "./component/People";
import { Planets } from "./component/Planets";
import { useEffect, useState } from "react";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	const [people, setPeople] = useState([]);
	const [planets, setPlanets] = useState([]); 

	useEffect(() => {
		async function fetchPeople() {
			let response = await fetch('https://swapi.dev/api/people');
			let data = await response.json();
			setPeople (data.results);
		}
		async function fetchPlanets() {
			let response = await fetch('https://swapi.dev/api/planets');
			let data = await response.json();
			setPlanets (data.results);
		}

		fetchPeople();
		fetchPlanets();
	}, []);

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
						<People data={people}/>
						<Planets data={planets}/>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
