import { Link } from "react-router-dom";

const UserList = ({users}) => {
    //const users = props.users; // using desctructuring instead of this shit
    console.log(users);
    return ( <div className="users">
        {users.map((user) => (
                <div className="user-preview" key={user.id}>
                    <Link to={ "/user/"+user.id }>
                        <img src={user.image} alt="user-image" />
                        <h2>{user.firstName} {user.lastName}</h2>
                        <p className="role">{user.role !== "user" && user.role}</p>
                    </Link>
                    
                </div>
            )
        )}
    </div> );
}
 
export default UserList;