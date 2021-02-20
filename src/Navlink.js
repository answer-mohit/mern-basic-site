import React from 'react'
import {Switch,Route, Redirect} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

function Navlink() {
    return (
        <div>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/services" component={Services}/>
<Redirect to="/"></Redirect>
        </Switch>
            
        </div>
    )
}

export default Navlink
