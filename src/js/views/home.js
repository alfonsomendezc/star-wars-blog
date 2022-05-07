import React from "react";
import { People } from "../component/People";
import { Planets } from "../component/Planets";
import "../../styles/home.css";
import { useEffect, useState } from "react";

export const Home = () => {
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
	<>
		<div className="text-center mt-5">
			<h1>Star Wars Database!</h1>
		</div>
		<People data={people}/>
		<Planets data={planets}/>
	</>
	);
};
