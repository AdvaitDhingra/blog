import '../App.css';
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom'
import Home from './Home.js'
import Posts from './Posts';
import About from './About';
import CreatePostPage from './CreatePostPage';



import fire from '../components/Firebase'
import { useEffect, useState } from 'react';


function App() {

  const [posts, SetPosts] = useState([])

  useEffect(() => {
    fire.firestore().collection('posts').onSnapshot(snapshot => {
      snapshot.forEach(post => {
          posts.push(post.data())
      })
      SetPosts(posts)
  })
  }, [])

  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Link style = {{
        position: "absolute",
        top: "110%",
        right: "10%",
        size: "1px"
      }}to = "/admin">Admin Page </Link>
    </div>
    <Switch>
      <Route component = {Home} path = "/" exact/>
      <Route  path = "/posts"><Posts posts = {posts}/></Route>
      <Route component = {About} path = "/about"/>
      <Route component = {CreatePostPage} path = "/admin"/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
