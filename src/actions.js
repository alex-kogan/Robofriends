import {CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAIL
} from './constants.js'


export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
});

export const requestRobots = () => (disptach) => {
	disptach({type: REQUEST_ROBOTS_PENDING})
	fetch('https://jsonplaceholder.typicode.com/users')
				.then(response => response.json()) // the retrun sends the json to the next function as a parameter
				.then(data => disptach({type: REQUEST_ROBOTS_SUCCESS, payload: data})) // updating the state runs render again
				.catch(error => disptach({type: REQUEST_ROBOTS_FAIL, payload: error}));
}