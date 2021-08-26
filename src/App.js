
import './App.css';
import { Route, Link } from 'react-router-dom';
import Login from "./page/login"
import Join from './page/join';
import Home from './page/home';
import Create from './page/create';



function App() {
  
  return (
    <>
    {/* <div>
    <Link to='/home'>Home</Link>
    </div> */}
    
    <div>
    <Link to='/login'>Login</Link>
    </div>
    <div>
    <Link to='/join'>Join</Link>
    </div>
    <div>
      <Link to ='create'>Create</Link>
    </div>
    
    {/* <Route to='/home' exact component={Home} /> */}
    <Route path='/login' exact component={Login} /> 
    <Route path='/join' exact component={Join} /> 
    <Route path='/create' exact component={Create} />
    </>
  );
}

export default App;
