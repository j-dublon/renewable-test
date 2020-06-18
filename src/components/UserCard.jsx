import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../store/actions";

export const UserCard = (props) => {
  const { name, email, company } = props;
  return (
    <div className="userCard">
      <h3 className="userCard__field">{name}</h3>
      <p className="userCard__field">{email}</p>
      <p className="userCard__field">{company}</p>
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
