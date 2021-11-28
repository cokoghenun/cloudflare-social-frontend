import React, { useState } from 'react';

const Home = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await fetch(`${process.env.REACT_APP_SERVER_URL}/posts`, {
      method: 'POST',
      body: JSON.stringify({ username, title, content }),
    });

    setTitle('');
    setContent('');
    setUsername('');
    setIsLoading(false);
  };
  return (
    <div>
      <div className='main'>
        <h1>New Post</h1>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-item'>
            <label htmlFor='username'>Username: </label>
            <input
              required
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className='form-item'>
            <label htmlFor='title'>Title: </label>
            <input
              required
              id='title'
              type='text'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>{' '}
          <div className='form-item'>
            <label htmlFor='content'>Content: </label>
            <textarea
              rows='5'
              required
              id='content'
              name='content'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className='form-item'>
            {isLoading ? (
              <input type='submit' value='Saving...' disabled />
            ) : (
              <input type='submit' value='Submit' />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
