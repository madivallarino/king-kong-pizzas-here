import React from 'react'
import './Post.css';
import Avatar from '@mui/material/Avatar';

function Post({ imageURL, username, caption}) {
  return (
    <div className="post">
        <div className="post__header">
            <Avatar
                className="post__avatar"
                alt="whoknows"
                src="/static/images/avatar/1.jpg"
             />
             <h3>{username}</h3>

        </div>
        
        {/* header -> avatar + username */}
        {/* image */}
        <img 
            className="post__image"
            src={imageURL}
            alt="puppy"
        />
        <h4 className="post__text"><strong>{username}:</strong> {caption}</h4>
        
    </div>
  )
}

export default Post