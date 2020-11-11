import { API_URL } from '../config';

export const getUsers = fetch(`${ API_URL }/users`)
    .then(response => response.json());

export const getGender = fetch(`${ API_URL }/users`)
    .then(response => response.json());

export const fillGenders = fetch(`${ API_URL }/genders`)
    .then(response => response.json());