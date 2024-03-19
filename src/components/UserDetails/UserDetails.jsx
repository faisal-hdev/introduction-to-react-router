import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();

  const { name, email, website } = user;
  return (
    <div
      style={{ border: "1px solid red", margin: "30px", borderRadius: "10px" }}
    >
      <h2>Details About User name : {name}</h2>
      <h3>Email : {email}</h3>
      <p>Visit us : {website}</p>
    </div>
  );
};

export default UserDetails;
