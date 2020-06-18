import React from "react";

const UserCard = ({ name, email, company }) => {
  return (
    <div className="userCard">
      <h3 className="userCard__field">{name}</h3>
      <p className="userCard__field">{email}</p>
      <p className="userCard__field">{company}</p>
      <button className="userCard__delete">Delete user</button>
    </div>
  );
};

export default UserCard;
