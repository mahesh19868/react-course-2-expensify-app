import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import  getVisibleExpenses  from './selectors/expenses';
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import './firebase/firebase';




const store = configureStore();


// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });



// store.dispatch(setTextFilter('bill'));

// store.dispatch(setTextFilter('gas'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('')); 
// }, 3000);

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>    
);

ReactDOM.render(jsx,document.getElementById('app'));
