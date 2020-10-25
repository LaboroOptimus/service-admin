import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Test} from "../Login/Test";
import {Login} from "../Login/Login";

const Main = () => {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/login' component={Test}/>
                </Switch>
            </main>
        )
    }
;

export default Main;