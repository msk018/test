
import './App.css';
import { Route } from 'react-router';
import Login from "./page/login"
import Join from './page/join';



function App() {
  return (
    <>
    App
    <Route path='/login' exact component={Login} /> 
    <Route path='/join' exact component={Join} /> 
    </>
  );
}

export default App;
