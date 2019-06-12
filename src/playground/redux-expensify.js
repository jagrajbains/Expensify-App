import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


// Expense reducers should contain these actions:-
//     1. ADD_EXPENSE
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//     2. REMOVE_EXPENSE
const removeExpense = ({ id = 0} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
//     3. EDIT_EXPENSE
const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// Filter reducer should contain these actions:-
//     1. SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
//     2. SORT_BY DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
});
//     3. SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
});
//     4. SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
//     5. SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});


//Expense Reducer

//setting up a default expenses state
const expensesDefaultState = [];
const expensesReducer = (state = expensesDefaultState , action) => {
    switch(action.type) { 
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ]
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
            });
        default:
            return state;
    }
}

//Filter Reducer

//setting up a default state for the filter state

const filterDefaultState = {
    text: '',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text : action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate : action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
            if (sortBy === 'date') {
                return a.createdAt < b.createdAt ? 1 : -1;
            }
           else if (sortBy === 'amount') {
                return a.amount < b.amount ? 1 : -1;
            }
    })
}

//Setting up the store
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(store.getState());
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description : 'rent', note: `last month's rent`, amount: 35000, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', note: `morning`, amount: 200, createdAt: -1000 }));
// store.dispatch(removeExpense({ id : expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByDate());
store.dispatch(sortByAmount());
// store.dispatch(setStartDate(-2125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1240));

const demoState = {
    expenses: [{
        id: 1,
        description: 'January Rent',
        note: 'This was the final payment',
        amount: 25000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};