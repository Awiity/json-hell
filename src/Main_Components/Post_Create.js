import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PostCreate = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ userId, setUserId ] = useState(0);
    const [ isPending, setIsPending ] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const post = {title, body, tags: [], reactions: {likes: 0, dislikes: 0}, views: 0, userId}
        setIsPending(true);

        fetch("http://localhost:8000/posts", {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(post)
        })
        .then(() => {
            setIsPending(false);
            console.log("Post has been added");
            navigate("/posts");
        })


    }

    return (
        <div className="create-post">
            <h2>Add a new Post!</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input
                    required
                    type="text"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}/>
                
                <label>Body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e) => { setBody(e.target.value) }}/>
                <label>Author's ID</label>
                <input
                    required
                    type="number"
                    value={userId}
                    onChange={(e) => { setUserId(e.target.value) }}/>
                <button>Submit</button>
            </form>
        </div>
    );
}
 
export default PostCreate;