import useFetch from "../Custom_Hooks/useFetch";
import UserList from "./UserList";

const Users = () => {
    const urlData = "http://localhost:8000/users";
    const { data: users, error, isPending } = useFetch(urlData);

    return (
        <div className="Users">
            {error && <div>{ error }</div>}
            {isPending && <div>Loading ...</div>}
            {users && <UserList users={users}/>}
        </div>
    );
}
 
export default Users;