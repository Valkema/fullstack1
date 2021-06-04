import React from "react";
import HeroesList from "../components/HeroesList";
import HeroForm from "../components/HeroForm";

export default function Superheroes() {
	return (
		<div>
			<HeroForm />
			<br />
			<HeroesList />
		</div>
	);
}
