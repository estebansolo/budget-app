import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
	incrementBy,
	type: 'INCREMENT'
});

const decremetCount = ({ decrementBy = 1 } = {}) => ({
	decrementBy,
	type: 'DECREMENT'
});

// Reducers
// 1. Reducer are pure functions
// 2. Never change state or actions

const countReducer = (state = { count: 0 }, action) => {
	console.log('running');

	switch (action.type) {
		case 'INCREMENT':
			const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
			return { count: state.count + incrementBy };
		case 'DECREMENT':
			const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
			return { count: state.count - decrementBy };
		case 'SET':
			return { count: action.count };
		case 'RESET':
			return { count: 0 };
		default:
			return state;
	}
};

const store = createStore(countReducer);

// Do something when state changes

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
});

// Actions - than an object that gets sent to the store

// increment. decrement, reset
/*store.dispatch({
	type: 'INCREMENT',
	incrementBy: 5
});*/

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

// To Unsubscribe

//unsubscribe();

store.dispatch({
	type: 'RESET'
});

store.dispatch(decremetCount({ decrementBy: 10 }));

store.dispatch({
	type: 'SET',
	count: 101
});
