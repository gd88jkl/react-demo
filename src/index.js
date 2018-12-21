import React from 'react'
import ReactDOM from 'react-dom'
import Login from './Login.js'
import Home from './Home.js'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" exact component={Home} />
                    <Redirect to="/" />
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"))