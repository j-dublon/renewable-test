import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../store/fetchUsers";
import UserCard from "./UserCard";
import {
  addUser,
  filterByName,
  filterByEmail,
  filterByCompany,
} from "../store/actions";

export class UserForm extends Component {
  state = { name: "", email: "", company: "" };

  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleAddSubmit = (event) => {
    event.preventDefault();
    this.props.addUser(this.state);
    this.setState({ name: "", email: "", company: "" });
  };

  render() {
    const { error, pending, users } = this.props;
    if (error) {
      return <div>Error! {error.message}</div>;
    }
    if (pending) {
      return <div>Loading...</div>;
    }
    return (
      <main>
        <form className="userForm__form">
          <h2 className="userForm__label">Filter users:</h2>
          <input
            type="text"
            name="name"
            placeholder="By name..."
            className="userForm__field"
            onChange={this.filterByName.bind(this)}
          ></input>
          <input
            type="text"
            name="email"
            placeholder="By email..."
            className="userForm__field"
            onChange={this.filterByEmail.bind(this)}
          ></input>
          <input
            type="text"
            name="company"
            placeholder="By company..."
            className="userForm__field"
            onChange={this.filterByCompany.bind(this)}
          ></input>
        </form>
        <section className="userCard__container">
          {users.map((user) => {
            return <UserCard key={user.name} {...user} />;
          })}
        </section>
        <form
          className="userForm__form"
          onSubmit={this.handleAddSubmit.bind(this)}
        >
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
