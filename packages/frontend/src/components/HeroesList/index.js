import React from "react";
import getHeroes from "./../../api";
import { connect } from "react-redux";
import ACTION_TYPES from "../../actions/types.js";

function HeroItemList(props) {
	const {
		hero: {
			id,
			nickname,
			realName,
			originDescription,
			catchPhrase,
			superpowers,
		},
	} = props;
	return (
		<li key={id}>
			nickname: {nickname}, realName: {realName}, Description:
			{originDescription}, Phrase: {catchPhrase}, superpowers:{superpowers}.
		</li>
	);
}

const HeroesList = (props) => {
	const { heroes, error, getHeroesRequest, getHeroesSuccess, getHeroesError } =
		props;

	const loadHeroes = () => {
		getHeroes();
	};

	useEffect(() => {
		loadHeroes();
	}, []);

	if (error) {
		return <div>Error</div>;
	}

	return (
		<>
			<ul>
				{heroes.map((hero) => (
					<HeroItemList hero={props.hero} />
				))}
			</ul>
		</>
	);
};

const mapStateToProps = (state) => {
	const { heroesState } = state;
	return heroesState;
};

const mapDispatchToProps = (dispatch) => {
	return {
		getHeroesRequest: () => dispatch({ type: ACTION_TYPES.GET_HEROES_REQUEST }),
		getHeroesSuccess: (data) =>
			dispatch({ type: ACTION_TYPES.GET_HEROES_SUCCESS, hero: data }),
		getHeroesError: (error) =>
			dispatch({ type: ACTION_TYPES.GET_HEROES_ERROR, error }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);
