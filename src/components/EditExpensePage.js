import React from 'react';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

export class EditExpensePage extends React.Component {
    constructor(props){
        super(props);
        
    }

    onSubmit = (expense) => {        
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    onClick = () => {
        
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    render(){
        return (
            <div>            
                <ExpenseForm
                    expense={this.props.expense} 
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onClick}>Remove</button>   

            </div>

        )

    }

}
// const EditExpensePage = (props) => {    
//     return (
//         <div>            
//             <ExpenseForm
//                 expense={props.expense} 
//                 onSubmit={(expense) => {                    
//                     props.dispatch(editExpense(props.expense.id, expense));
//                     props.history.push('/');
//                 }}
//             />
//             <button onClick={() => {                
//                 props.dispatch(removeExpense({ id: props.expense.id }));
//                 props.history.push('/');
//             }}>Remove</button>   

//         </div>
//     );
// }

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id )
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editExpense:(id,expense) => dispatch(editExpense(id,expense)),
        removeExpense:(data) => dispatch(removeExpense(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);