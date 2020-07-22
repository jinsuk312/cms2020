import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Home from '../sub/Home/Home';
import Services from '../sub/Services/Services';
import Gallery from '../sub/Gallery/Gallery';
import About from '../sub/About/About';
import Policy from '../sub/Policy/Policy';
import Faq from '../sub/Faq/Faq';
import './Content.css';
class Content extends Component {
    render() {
        return (
            <div className="content">
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/services" component={Services} />
                <Route path="/about" component={About} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/policy" component={Policy} />
                <Route path ="/faq" component={Faq} />
                </Switch>
            </div>
        );
    }
}

export default Content;
