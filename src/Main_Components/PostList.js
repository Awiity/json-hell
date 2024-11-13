import { Link } from "react-router-dom";

const PostList = ({posts}) => {
    //const posts = props.posts; // using desctructuring instead of this shit
    console.log(posts);

    return ( <div className="posts">
        {posts.map((post) => (
                <div className="post-preview" key={post.id}>
                    <Link to={ "/post/"+post.id }>
                        <h2>{post.title}</h2>
                    </Link>
                    <p>Tags: {post.tags.map((item)=>item+" | ")} ID: {post.id}</p>
                    <div className='reactions'>
                        <p>Likes: {post.reactions.likes}</p> 
                        <p>, Dislikes: {post.reactions.dislikes}.</p> 
                    </div>
                </div>
                
            )
        )}
    </div> );
}
 
export default PostList;