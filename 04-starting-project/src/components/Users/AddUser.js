import { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { ErrorModal } from "../UI/ErrorModal";

// user의 정보를 추가하는 기능
const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    // age가 string 타입으로 들어오기 때문에 '+'를 사용해 숫자형으로 변환
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // modal창 밖이나 okay버튼을 클릭하면 모달창이 닫히는 기능을 함
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {/* error가 발생했을 경우에만 ErrorModal component가 사용됨 */}
      {/* 이때, 중괄호 안에는 하나의 JSX만 들어갈 수 있다 */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        {/* form이 제출될 때 실행될 함수를 obSubmit props로 지정 */}
        <form onSubmit={addUserHandler}>
          {/* label에 htmlFor 속성을 줘서 input과 연결 */}
          <label htmlFor="username">Username</label>
          {/* value props를 추가해서 onChange될 때 뿐만이 아니라 submit이 되고 난 후에도 값이 반영되도록함 */}
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
