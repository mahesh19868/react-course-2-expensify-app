export default (expenses) => {  
    if(expenses && expenses.length > 0){
        return expenses
        .map((expense) => expense.amount)
        .reduce((totalAmount, amount) => totalAmount + amount, 0);
    }else{
        return 0;
    }      
}