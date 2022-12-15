import React, { Fragment, useState } from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const AddUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
