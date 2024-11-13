import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Posts from './Main_Components/Posts';
import Navbar from './Main_Components/Navbar';
import ChatLogin from './Main_Components/ChatLogin';
import PostCreate from './Main_Components/Post_Create';
import PostDetails from './Main_Components/PostDetails';
import Users from './Main_Components/Users';
import UserDetails from './Main_Components/UserDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path='/' element={<ChatLogin/>}/>
            <Route path='/posts' element={<Posts/>}/>
            <Route path='/posts/create' element={<PostCreate />}/>
            <Route path='/post/:id' element={<PostDetails />}/>
            <Route path='/users' element={<Users />}/>
            <Route path='/user/:id' element={<UserDetails />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
