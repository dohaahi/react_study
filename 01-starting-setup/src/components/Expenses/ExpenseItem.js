import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  const clickHandler = () => {
    console.log("Clicked!!!!");
  };

  return (
    <Card className="expense-item">
      {/* props.date는 App에서 부터 전해 받아온 data(정확히 말하자면 date)를 ExpenseDate에 전달해주기 위해 작성된 코드 */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
