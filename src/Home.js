import React from 'react'
import { Navbar } from './components/Navbar';
import {App} from './App';
import { Route, Routes } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Routes>
                <Navbar />
                <App />
                <Switch>
                    <Route exact path='/'><App key="general" pageSize={5} country="us" category="general"/></Route>
                    <Route exact path='/entertainment'><App key="entertainment" pageSize={5} country="us" category="entertainment"/></Route>
                    <Route exact path='/finance'><App key="finance" pageSize={5} country="us" category="finance"/></Route>
                    <Route exact path='/health'><App key="health" pageSize={5} country="us" category="health"/></Route>
                    <Route exact path='/science'><App key="cience" pageSize={5} country="us" category="science"/></Route>
                    <Route exact path='/sports'><App key="sports" pageSize={5} country="us" category="sports"/></Route>
                    <Route exact path='/tech'><App key="techology" pageSize={5} country="us" category="techology"/></Route>
                </Switch>

            </Routes >
        </div>
    );
};

export default Home;