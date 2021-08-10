import '../App.css';
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Home.js'
import Posts from './Posts';
import About from './About';
import CreatePostPage from './CreatePostPage';


import fire from '../components/Firebase'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
    </div>
    <Switch>
      <Route component = {Home} path = "/" exact/>
      <Route component = {Posts} path = "/posts"/>
      <Route component = {About} path = "/about"/>
      <Route component = {CreatePostPage} path = "/admin"/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
