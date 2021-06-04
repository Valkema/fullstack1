import ACTION_TYPES from "../actions/types";

const initialState = {
	heroes: [],
	isFetching: false,
	error: null,
};

function heroesReducer(state = initialState, action) {
	const { type } = action;
	switch (type) {
		case ACTION_TYPES.GET_HEROES_REQUEST:
		case ACTION_TYPES.CREATE_HERO_REQUEST: {
			return {
				...state,
				isFetching: true,
				error: false,
			};
		}
		case ACTION_TYPES.CREATE_HERO_SUCCESS: {
			const { hero } = action;
			const { heroes } = state;
			return {
				...state,
				heroes: [...heroes, hero],
				error: false,
			};
		}
		case ACTION_TYPES.GET_HEROES_SUCCESS: {
			const { heroes } = action;
			return {
				...state,
				heroes: heroes,
				isFetching: false,
				error: false,
			};
		}
		case ACTION_TYPES.GET_HEROES_ERROR:
		case ACTION_TYPES.CREATE_HERO_ERROR: {
			const { error } = action;
			return {
				...state,
				isFetching: false,
				error,
			};
		}
		default: {
			return state;
		}
	}
}
export default heroesReducer;
