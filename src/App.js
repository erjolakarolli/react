import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './modules/Index';
import Releases from './modules/Releases/releases';
import Models from './modules/Model/models';
import Gallery from './modules/Gallery/gallery';
import About from './modules/Content/about';
import Contacts from './modules/Contact/contacts';
import SignUp from './modules/Content/signup';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <div className="content">
                    <Route path="/" exact component={Home} />
                    <Route path="/releases" component={Releases} />
                    <Route path="/models" component={Models} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contacts} />
                    <Route path="/sign-up" component={SignUp} />
                </div>
            </Switch>
            <Footer />
        </Router>  
    );
};

export default App;