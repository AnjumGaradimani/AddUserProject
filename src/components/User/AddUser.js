import React, { useState, useRef } from "react";
import Wrapper from "../Helpers/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import addstyles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [adduser, setAddUser] = useState();
  const [addage, setAddAge] = useState("");
  const [error, setError] = useState("");

  const adduserChangeHandler = (e) => {
    setAddUser(e.target.value);
  };
  const addageChangeHandler = (e) => {
    setAddAge(e.target.value);
  };

  const AddUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    // if (adduser.trim().length === 0 || addage.trim().length === 0) {
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age. ",
      });
    }
    // if (+addage < 1) {
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age (> 0). ",
      });
    }
    // console.log(adduser, addage);
    // props.onAddUser(adduser, addage);
    props.onAddUser(enteredName, enteredAge);
    setAddUser("");
    setAddAge("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={addstyles.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={adduser}
            ref={nameInputRef}
            onChange={adduserChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={addage}
            ref={ageInputRef}
            onChange={addageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
