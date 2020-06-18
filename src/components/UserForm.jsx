import React, { Component } from "react";
import UserCard from "./UserCard";
import axios from "axios";

class UserForm extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get("https://renewable.exchange/test/users.json").then((response) => {
      this.setState({ users: response.data });
    });
  }

  render() {
    return (
      <main>
        <form className="userForm__form">
          <h2 className="userForm__label">Filter users:</h2>
          <input
            type="text"
            name="name"
            placeholder="By name..."
            className="userForm__field"
          ></input>
          <input
            type="text"
            name="email"
            placeholder="By email..."
            className="userForm__field"
          ></input>
          <input
            type="text"
            name="company"
            placeholder="By company..."
            className="userForm__field"
          ></input>
        </form>
        <section className="userCard__container">
          {this.state.users.map((user) => {
            return <UserCard key={user.name} {...user} />;
          })}
        </section>
        <form className="userForm__form">
          <h2 className="userForm__label">Add new user:</h2>
          <input
            type="text"
            name="addName"
            placeholder="Name..."
            className="userForm__field"
          ></input>
          <input
            type="text"
            name="addEmail"
            placeholder="Email..."
            className="userForm__field"
          ></input>
          <input
            type="text"
            name="addCompany"
            placeholder="Company..."
            className="userForm__field"
          ></input>
          <button className="userForm__submit">Submit</button>
        </form>
      </main>
    );
  }
}

export default UserForm;