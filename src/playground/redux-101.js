import { createStore } from 'redux';

//Action Generators
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count}) => ({
    type: 'SET',
        count
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducers
// 1. Reducers are pure functions:- Their output is dependent solely on their inputs. They do not mutate the data outside of their scope
// 2. Never change the state or the action that gets passed into the reducers

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + action.incrementBy };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return { count: state.count - decrementBy };
        case 'RESET':
            return { count: 0 };
        case 'SET':
            return { count: action.count };
        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});


// store.dispatch( {
//     type: 'INCREMENT',
//     incrementBy: 5,
// });

store.dispatch(incrementCount({incrementBy : 5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count:100}));