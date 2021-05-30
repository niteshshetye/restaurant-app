import './App.css';
// rout 
import {
  BrowserRouter as Router, 
  Route
} from "react-router-dom";

import Home from './components/Home'
import RestaurantList from './components/RestaurantList.js'
import RestaurantCreate from './components/RestaurantCreate'
import RestaurantDetail from './components/RestaurantDetail'
import RestaurantUpdate from './components/RestaurantUpdate'
import RestaurantSearch from './components/RestaurantSearch'
import Login from './components/Login'
import Logout from './components/Logout'
import {Protected} from './components/Protected'




function App() {
  return (
    <div className="App">
      <Router>
        {/* Route setup start */}
        <Protected exact path = "/" component= {Home}/>
        <Protected exact path = "/list" component= {RestaurantList}/>
        <Protected exact path = "/create" component= {RestaurantCreate}/>
        <Protected exact path = "/detail" component= {RestaurantDetail}/>
        <Protected exact path = "/search" component= {RestaurantSearch}/>
        <Protected exact path = "/update/:id" component= {RestaurantUpdate}/>
        {/* Login */}      
        <Route path="/login" render={props=>(<Login {...props}/>)}></Route>
        {/* Login */}
        {/* LogOut */}
        <Route path="/logout"> <Logout /> </Route>
        {/* LogOut */}
        {/* Route setup end */}
      </Router>
    </div>
  );
}

export default App;
