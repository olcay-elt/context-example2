import { useContext } from "react";
import User from "../components/User";
import { UserContext } from "../context/UserContextProvider";

const ShowUsers = () => {
  //? users bilgisini context'den okuduk
  const { users } = useContext(UserContext);
  // const { users } = useUserContext();
  console.log(users);
  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default ShowUsers;
