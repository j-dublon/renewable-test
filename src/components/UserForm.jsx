import React, { Component } from "react";
import { connect } from "react-redux";
import * as api from "../store/api";
import UserCard from "./UserCard";
import { addUser } from "../store/actions";

export class UserForm extends Component {
  state = { name: "", email: "", company: "", filteredUsers: [] };

  componentDidMount() {
    this.props.dispatch(api.fetchUsers());
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleAddSubmit = (event) => {
    event.preventDefault();
    this.props.addUser(this.state);
    // const id = this.props.users.length;
    // const { name, email, company } = this.state;
    // const params = { id, name, email, company };
    // api.addUser(id, params);
    this.setState({ name: "", email: "", company: "", filteredUsers: [] });
  };

  handleFilter = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value.toLowerCase();
    const { users } = this.props;
    const filtered = users.filter((user) => {
      return user[fieldName].toLowerCase().includes(value);
    });
    this.setState({ filteredUsers: filtered });
  };

  render() {
    const { error, pending, users } = this.props;
    const { filteredUsers } = this.state;
    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (pending) {
      return <div>Loading...</div>;
    }
    return (
      <main>
        <form className="userForm">
          <h2 className="userForm__label">Filter users:</h2>
          <input
            type="text"
            name="name"
            placeholder="By name..."
            className="userForm__field"
            onKeyUp={this.handleFilter.bind(this)}
          ></input>
          <input
            type="text"
            name="email"
            placeholder="By email..."
            className="userForm__field"
            onKeyUp={this.handleFilter.bind(this)}
          ></input>
          <input
            type="text"
            name="company"
            placeholder="By company..."
            className="userForm__field"
            onKeyUp={this.handleFilter.bind(this)}
          ></input>
        </form>
        <section className="userCard__container">
          {filteredUsers.length === 0
            ? users.map((user) => {
                return <UserCard key={user.name} {...user} />;
              })
            : filteredUsers.map((user, index) => {
                return <UserCard key={index} {...user} />;
              })}
        </section>
        <form className="userForm" onSubmit={this.handleAddSubmit.bind(this)}>
          <h2 className="userForm__label">Add new user:</h2>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name..."
            className="userForm__field"
            onChange={this.handleChange.bind(this)}
          ></input>
          <input
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Email..."
            className="userForm__field"
            onChange={this.handleChange.bind(this)}
          ></input>
          <input
            type="text"
            name="company"
            value={this.state.company}
            placeholder="Company..."
            className="userForm__field"
            onChange={this.handleChange.bind(this)}
          ></input>
          <button className="userForm__submit">Submit</button>
        </form>
        <h3 className="userForm__userCount">Number of users: {users.length}</h3>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  loading: state.pending,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user)),
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
