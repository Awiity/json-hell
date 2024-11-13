import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../Custom_Hooks/useFetch";

const UserDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: user, error, isPending } = useFetch(`http://localhost:8000/users/${id}`);

    const handleDelete = (e) => {
        fetch("http://localhost:8000/users/" + id, {
            method: "DELETE"
        })
        .then(()=>{
            console.log(`User with ID: ${id} has been deleted`)
        })
        navigate("/users");
    }

    return (
        <div className="user-content">
            {isPending && <div>Loading ...</div>}
            {error && <div>{error.message}</div>}
            <h2>{user && user.firstName} { user && user.maidenName !== "" && user.maidenName } {user && user.lastName}</h2>
            {user && <div className="details">
                <img src={user.image}/>
                <p>Age: {user.age}</p>
                <p>Gender: {user.gender}</p>
                <p>E-mail: {user.email}</p>
                <p>Location: {user.address.stateCode} {user.address.country}</p>
                <p>Job: {user.company.title} at {user.company.department} department for {user.company.name}</p>
                <p></p>
            </div>}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
 
export default UserDetails;