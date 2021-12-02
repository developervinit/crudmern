import React from 'react';
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import AddUser from './components/AddUser.jsx';
import AllUser from './components/AllUser.jsx';
import NotFound from "./components/NotFound.jsx"
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
           <BrowserRouter>
              <NavBar />
               <Switch>
                <Route  exact path="/" component={Home} />
                <Route  exact path="/users" component={AddUser} />
                <Route  exact path="/all" component={AllUser} /> 
                <Route component={NotFound} />
               </Switch>
           </BrowserRouter>
           
          );
}

export default App;
