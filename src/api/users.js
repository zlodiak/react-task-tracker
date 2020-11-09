import { API_URL } from '../config';

export const getUsers = fetch(`${ API_URL }/users`)
    .then(response => response.json());