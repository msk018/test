
import './App.css';
import { Route, Link } from 'react-router-dom';
import Login from "./page/login"
import Join from './page/join';
import Home from './page/home';



function App() {
  
  return (
    <>
    <div>
    <Link to='/'>Home</Link>
    </div>
    
    <div>
    <Link to='/login'>Login</Link>
    </div>
    <div>
    <Link to='/join'>Join</Link>
    </div>
    
    <Route to='/' component={Home} />
    <Route path='/login' exact component={Login} /> 
    <Route path='/join' exact component={Join} /> 
    </>
  );
}

export default App;
