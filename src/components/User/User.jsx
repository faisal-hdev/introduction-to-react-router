import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const User = ({ user }) => {
  // eslint-disable-next-line react/prop-types
  const { name, email, phone, id } = user;

  const userStyle = {
    border: "1px solid yellow",
    padding: "15px",
    borderRadius: "10px",
  };

  return (
    <div style={userStyle}>
      <h2>Name : {name}</h2>
      <h3>Email : {email}</h3>
      <p>Phone : {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
      <Link to={`/user/${id}`}>
        <button>Click me</button>
      </Link>
    </div>
  );
};

export default User;
