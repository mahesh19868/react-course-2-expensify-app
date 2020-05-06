import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';


export const ExpensesSummary = (props) => {
    let message;    
    if(props.expenseCount === 1){
        message = <p>Viewing { props.expenseCount } expense totalling { props.expenseTotal }</p>;
    }
    else if(props.expenseCount > 1) {
        message = <p>Viewing { props.expenseCount } expenses totalling { props.expenseTotal }</p>;
    }
    return (
        <div>
            {message}
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