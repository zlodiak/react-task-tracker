import { API_URL } from '../config';

export const getUsers = fetch(`${ API_URL }/users`)
    .then(response => response.json());

export const getGender = fetch(`${ API_URL }/users`)
    .then(response => response.json());

export function setUser(user, id) {
    return fetch(`${ API_URL }/users/${ id }`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    });
}

export const fillGenders = fetch(`${ API_URL }/genders`)
    .then(response => response.json());