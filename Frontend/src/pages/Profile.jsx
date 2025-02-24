import { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/profile", { withCredentials: true })
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Unauthorized"));
  }, []);

  return user ? (
    <div>
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Profile;
