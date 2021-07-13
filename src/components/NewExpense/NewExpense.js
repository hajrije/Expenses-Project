import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    
  const [isEditing,setIsEditing] = useState(false); ///e vendosim false/true doesnt matters.
    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

  const startEditingHandler = () => { 
   setIsEditing(true)
  };

  const stopEditing= () => {
      setIsEditing(false)
  };

 return (
     <div className='new-expense'> 
     {!isEditing && (
      <button onClick={startEditingHandler}>Add new Expense</button> //nqs butoni nuk eshte klikuar sdo hapet forma
     )} 
    {isEditing && (
     <ExpenseForm 
     onSaveExpenseData = {saveExpenseDataHandler}           //nqs butoni eshte klikuar shfaqet forma dhe butoni cancel .
     onCancel = {stopEditing}
     />
    )}                        
     </div>
 );

};



export default NewExpense;