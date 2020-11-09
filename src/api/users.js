import { API_URL } from '../config';

export const checkCredentials = fetch(`${ API_URL }/users`)
    .then(response => response.json());