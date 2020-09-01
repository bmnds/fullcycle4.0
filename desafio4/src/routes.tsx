import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import UserList from './pages/UserList'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={UserList} />
                <Route path="/users" component={UserList} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes