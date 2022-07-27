import React from 'react'
import Post from './Post'

function Posts() {

  const posts= [
    {
      id: '123',
      username: 'lovedogs101',
      userImg: 'https://miro.medium.com/max/3150/1*j8oct7dLeIL8Ruw69NfcrA.jpeg',
      img: 'https://miro.medium.com/max/3150/1*j8oct7dLeIL8Ruw69NfcrA.jpeg',
      caption: 'Trying to live my life'
    }
  ]
  return (
    <div>
        {posts.map((post) => (
          <Post 
            key={post.id}
            id={post.id}
            username={post.username}
            img={post.img}
            caption={post.caption}

          />
        ))}
        <Post />
        <Post />
    </div>
  )
}

export default Posts