import ACTION_TYPES from './types';

export const createHero = (data) => ({
    type: ACTION_TYPES.CREATE_HERO,
    data,
});

export const createHeroRequest = (data) => ({
    type: ACTION_TYPES.CREATE_HERO_REQUEST,
    data,
});
export const createHeroSuccess = (hero) => ({
    type: ACTION_TYPES.CREATE_HERO_SUCCESS,
    hero,
});
export const createHeroError = (error) => ({
    type: ACTION_TYPES.CREATE_HERO_ERROR,
    eror,
});

export const getHeroes = (params) => ({
    type: ACTION_TYPES.GET_HEROES,
    data,
});

export const getHeroesSuccess = (heroes) => ({
    type: ACTION_TYPES.GET_HEROES_SUCCESS,
    heroes,
});

export const getHeroesError = (error) => ({
    type: ACTION_TYPES.GET_HEROES_ERROR,
    error,
});