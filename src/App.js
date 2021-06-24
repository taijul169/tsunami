import React, { createContext,useReducer } from 'react';
import './App.css'
import Home from '../src/components/pages/Home';
import{Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';


function App() {
  
  return (
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
     
    {/* <Route>
      <Errorpage />
    </Route> */}
  </Switch>
  )
}

export default App;
