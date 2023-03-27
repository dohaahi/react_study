import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      {/* form이 제출될 때 실행될 함수를 obSubmit props로 지정 */}
      <form onSubmit={addUserHandler}>
        {/* label에 htmlFor 속성을 줘서 input과 연결 */}
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age(Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
