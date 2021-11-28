import './App.css';
import Home from './components/Home';
import NewPost from './components/NewPost';
import { Link, Router } from '@reach/router';

function App() {
  const isActive = ({ isCurrent }) =>
    isCurrent ? { className: 'active' } : {};

  return (
    <>
      <nav>
        <ul className='navbar'>
          <li>
            <Link getProps={isActive} to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link getProps={isActive} to='/new'>
              New Post
            </Link>
          </li>
        </ul>
      </nav>
      <Router>
        <Home path='/' />
        <NewPost path='/new' />
      </Router>
    </>
  );
}

export default App;
