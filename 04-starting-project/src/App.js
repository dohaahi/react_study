import React, { useState } from "react";
import AddUSer from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUSer onAddUser={addUserHandler} />
      {/* UserList에 user props를 만들어줌
          여기서 users에 대한 상태관리를 해줄 것임
          이유: AddUser, UserList 컴포넌트 보다 한단계 위에 있고
               두 컴포넌트들과 가장 가까운 컴포넌트이기 때문에 둘 다 접근 가능 */}
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
