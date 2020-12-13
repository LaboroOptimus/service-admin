import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Requests from "./Requests";
import {LoginPage} from "../Login/LoginPage";
import New from "./New";

const Main = () => {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={LoginPage}/>
                    <Route path='/requests' component={Requests}/>
                    <Route path='/new' component={New}/>
                </Switch>
            </main>
        )
    }
;

export default Main;