import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const navigate = useNavigate();
  const { name, email, website } = user;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div
      style={{ border: "1px solid red", margin: "30px", borderRadius: "10px" }}
    >
      <h2>Details About User name : {name}</h2>
      <h3>Email : {email}</h3>
      <p>Visit us : {website}</p>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default UserDetails;
