import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Test} from "../Login/Test";
import {LoginPage} from "../Login/LoginPage";

const Main = () => {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={LoginPage}/>
                    <Route path='/test' component={Test}/>
                </Switch>
            </main>
        )
    }
;

export default Main;