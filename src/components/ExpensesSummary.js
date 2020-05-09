import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';


export const ExpensesSummary = ({expenseCount,expenseTotal}) => {
    const messageWord = (expenseCount === 1) ? 'expense': 'expenses';
    return (
        <div>
           <h1>Viewing {expenseCount} {messageWord} totalling {expenseTotal} </h1>
        </div>
    );   
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    const expenseTotal = getExpensesTotal(visibleExpenses);
    return {
        expenseTotal: numeral(expenseTotal / 100).format('$0,0.00'),         
        expenseCount: visibleExpenses.length            
    };
};

export default connect(mapStateToProps)(ExpensesSummary);