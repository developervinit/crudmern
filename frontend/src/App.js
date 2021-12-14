import React from 'react';
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import AddUser from './components/AddUser.jsx';
import AllUser from './components/AllUser.jsx';
import EditUser from './components/EditUser.jsx';
import NotFound from "./components/NotFound.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
           <BrowserRouter>
              <NavBar />
               <Switch>
                <Route  exact path="/" component={Home} />
                <Route  exact path="/newuser" component={AddUser} />
                <Route  exact path="/users" component={AllUser} />
                <Route exact path="/edit/:id" component={EditUser}/>
                <Route component={NotFound} />
               </Switch>
                <Footer />
               </BrowserRouter>
           
          );
}

export default App;
