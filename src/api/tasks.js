import { API_URL } from '../config';


export const getTasks = fetch(`${ API_URL }/tasks`)
    .then(response => response.json());

export const fillTaskStatusses = fetch(`${ API_URL }/task-statusses`)
    .then(response => response.json());    

export function addTask(task) {
    return fetch(`${ API_URL }/tasks`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(task)
    })    
}