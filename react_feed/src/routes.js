import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from '././components/Welcome/Welcome';
import Home from '././components/Home/Home';
import Wish from '././components/Wish/Wish';
import Cart from '././components/Cart/Cart';
import Login from '././components/Login/Login';
import Signup from '././components/Signup/Signup';
import NotFound from '././components/NotFound/NotFound';

const Routes = () => (
<BrowserRouter >
<Switch>
<Route exact path="/" component={Login}/>
<Route path="/home" component={Home}/>
<Route path="/cart" component={Cart}/>
<Route path="/wish" component={Wish}/>
<Route path="/login" component={Login}/>
<Route path="/Signup" component={Signup}/>
<Route path="*" component={NotFound}/>
</Switch>
</BrowserRouter>
);
export default Routes;