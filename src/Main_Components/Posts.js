import useFetch from "../Custom_Hooks/useFetch";
import PostList from "./PostList";
import { Link, Navigate } from "react-router-dom";

const Posts = () => {
    const urlData = "http://localhost:8000/posts";
    const { data: posts, error, isPending } = useFetch(urlData);

    return (
        <div className="Posts">
            <Link to="/posts/create">Add a post</Link>
            {error && <div>{ error }</div>}
            {isPending && <div>Loading ...</div>}
            {posts && <PostList posts={posts}/>}
        </div>
    );
}
 
export default Posts;