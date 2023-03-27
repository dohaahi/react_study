import { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      {/* form이 제출될 때 실행될 함수를 obSubmit props로 지정 */}
      <form onSubmit={addUserHandler}>
        {/* label에 htmlFor 속성을 줘서 input과 연결 */}
        <label htmlFor="username">Username</label>
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
