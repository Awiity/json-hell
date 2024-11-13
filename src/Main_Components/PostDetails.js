import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../Custom_Hooks/useFetch";

const PostDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data: post, error, isPending } = useFetch(`http://localhost:8000/posts/${id}`);

    const handleDelete = (e) => {
        fetch("http://localhost:8000/posts/" + id, {
            method: "DELETE"
        })
        .then(()=>{
            console.log(`Post with ID: ${id} has been deleted`)
        })
        navigate("/posts");
    }

    return (
        <div className="post-content">
            {isPending && <div>Loading ...</div>}
            {error && <div>{error.message}</div>}
            <h2>{post && post.title}</h2>
            <p className="body">{post && post.body}</p>
            <p>Likes: {post && post.reactions.likes}, Dislikes: {post && post.reactions.dislikes}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
 
export default PostDetails;