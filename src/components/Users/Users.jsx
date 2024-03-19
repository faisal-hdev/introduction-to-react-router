import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";

const Users = () => {
  const users = useLoaderData();

  // console.log(users);
  return (
    <div>
      <h2>Our User : {users.length}</h2>
      <p>Fantastic Vodro Users</p>
      <div className="card-container">
        {users.map((user) => (
          <User user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default Users;
