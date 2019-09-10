import {
	FETCH_DEVELOPERS_PENDING,
	FETCH_DEVELOPERS_FULFILLED,
	FETCH_DEVELOPERS_REJECTED,
} from '../actions/developersAction';

const initialState = {
	fetching: false,
	developers: [],
	error: {}
};

export default (state = initialState, action) => {
	switch (action.type){
        // Developers Fetch
		case FETCH_DEVELOPERS_PENDING:
			return {
				...state,
				fetching: true
			};
		case FETCH_DEVELOPERS_FULFILLED:
			return {
				...state,
				developers: action.payload,
				fetching: false
			};
		case FETCH_DEVELOPERS_REJECTED:
			return {
				...state,
				error: action.payload,
				fetching: false
			};
		default:
			return state;	
	}
}