import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import Login from './screens/Login';
import Registration from './screens/Registration ';
import Notfound from './screens/Notfound'

const routing=(
  <BrowserRouter>
<Switch>
<Route exact path="/" component={App}/>
<Route exact path="/login" component={Login}/>
<Route exact path="/register" component={Registration}/>
<Route  component={Notfound}/>
</Switch>

</BrowserRouter>

)

ReactDOM.render( routing,document.getElementById('root'));


reportWebVitals();
