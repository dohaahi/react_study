import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseDate = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseDate);
    // form이 제출되고 나면 초기 상태로 돌아가게함
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  let buttonContent = (
    <button onClick={startEditingHandler}>Add New Expense</button>
  );

  // Add New Expense버튼을 누르면 addForm 보여주기
  if (isEditing) {
    buttonContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDateHandler}
        onCancel={stopEditingHandler}
      />
    );
  }

  return <div className="new-expense">{buttonContent}</div>;
}
