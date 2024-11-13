import { Link } from "react-router-dom";

const Navbar = () => {



    return (
        <div className="navbar">
            <h1>JSON hell</h1>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/users">Users</Link>
        </div>
    );
}
 
export default Navbar;