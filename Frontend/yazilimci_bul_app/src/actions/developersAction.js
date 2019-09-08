import { API_BASE } from '../config/env';
import axios from 'axios';

export const FETCH_DEVELOPERS_PENDING = "FETCH_DEVELOPERS_PENDING";
export const FETCH_DEVELOPERS_FULFILLED = "FETCH_DEVELOPERS_FULFILLED";
export const FETCH_DEVELOPERS_REJECTED = "FETCH_DEVELOPERS_REJECTED";

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'apikey': 'myapikey18812019',
};

export function fetchDevelopers(){
	return dispatch => {
		dispatch({
			type: "FETCH_DEVELOPERS",
			payload: axios.get(`${API_BASE}/developers`, {headers})
				.then(result => result.data.developers)
		})
	}
}