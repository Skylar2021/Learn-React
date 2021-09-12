import React, {useEffect} from 'react'
import { BrowserRouter, Router, Link, Switch, Route } from 'react-router-dom'

export default function Test() {
    useEffect(() => {
        return () => {
        }
    }, [])

    return (
        <BrowserRouter>            
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/topics">Topics</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route path="/about">
                            <h1>About</h1>
                        </Route>
                        <Route path="/topics">
                            <h1>Topics</h1>
                        </Route>
                        <Route path="/">
                            <h1>Home</h1>
                        </Route>
                    </Switch>
                </div>            
        </BrowserRouter>
    )
}
