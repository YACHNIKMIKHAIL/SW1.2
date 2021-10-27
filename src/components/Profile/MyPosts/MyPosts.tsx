import React from "react";
import Post from "./Post/Post";
import Style from "./myPosts.module.css"

const MyPosts = (props: { posts: any[]; }) => {
    let postsElements =props.posts.map(p => <Post mesage={p.message} LikeCounts={p.LikeCounts}/>)

    return (
        <div>
            <div className={Style.content}>
                <div className={Style.ta}>
                    <textarea/>
                </div>
                <div className={Style.buttons}>
                    <div>
                        <button>Add post</button>
                        <button>Remove</button>
                    </div>
                </div>
            </div>
            <div>
                {
                    postsElements
                }
            </div>
        </div>

    )
}

export default MyPosts;
