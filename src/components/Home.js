import React, { useEffect, useState } from 'react';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const resp = await fetch(
        'https://social-backend.cokoghenun15.workers.dev/posts'
      );
      const postsResp = await resp.json();
      setPosts(postsResp);
    })();
  }, []);

  return (
    <div>
      <div className='main'>
        <h1>Feed</h1>
        <div className='feed'>
          {posts.map((post) => (
            <div className='post' key={post.id}>
              <div className='post-top'>
                <div>{post.title}</div>
                <div>@{post.username}</div>
              </div>
              <div className='post-body'>{post.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
