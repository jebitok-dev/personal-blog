import React from 'react'

const PostWidget = ({post}) => {
    return (
        <div>
            {post.title}
            {post.excerpt}
        </div>
    )
}

export default PostWidget
