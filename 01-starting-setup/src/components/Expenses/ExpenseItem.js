import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated!!");
  };

  return (
    // Card 컴포넌트는 item을 <div>를 반환하고 있는데
    // 이를 목록으로 반환하기 위해 <li> 태그로 감싸주었다
    <li>
      <Card className="expense-item">
        {/* props.date는 App에서 부터 전해 받아온 data(정확히 말하자면 date)를 ExpenseDate에 전달해주기 위해 작성된 코드 */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
}
