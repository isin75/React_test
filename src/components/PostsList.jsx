import React from 'react';

import PostItem from './PostItem';

const PostsLists = ({posts, title, remove}) => {
    // Условная отрисовка
    if(!posts.length) {
        return (
            <h1 style={{textAlign: "center"}}>
                Постов нет
            </h1>
        )
    }

    return(
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            {posts.map((post, index) => 
                <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
            )}
        </div>
    )
}

export default PostsLists