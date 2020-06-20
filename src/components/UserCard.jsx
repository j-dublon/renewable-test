import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../store/actions";

export const UserCard = (props) => {
  const { name, email, company } = props;
  return (
    <div className="userCard">
      <h3 className="userCard__name">{name}</h3>
      <p className="userCard__email">{email}</p>
      <p className="userCard__company">{company}</p>
      <button
        className="userCard__delete"
        onClick={() => props.deleteUser(props.name)}
      >
        Delete user
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { deleteUser: (user) => dispatch(deleteUser(user)) };
};

export default connect(null, mapDispatchToProps)(UserCard);
