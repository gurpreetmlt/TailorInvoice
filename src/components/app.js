import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function LoadHomepage(props) {
    return (
        <h1> Welcome to Home Page</h1>
    );
}

function LoadCreateInvoice(props) {
    return (
        <h1> Welcome to Create invoice Form</h1>
    );
}

function LoadUpdateInvoice(props) {
    return (
        <h1> Welcome to Update invoice Form</h1>
    );
}

function LoadDisplayInvoice(props) {
    return (
        <h1> Welcome to Load Display Invoice </h1>
    );
}

function LoadAllInvoices(props) {
    return (
        <h1> Welcome to Invocies Listing </h1>
    );
}

function LoadPageNotFound(props) {
    return (
        <h1> ERROR 404 Page Not Found </h1>
    );
}

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" >
                        <LoadHomepage />
                    </Route>
                    <Route path="/createinvoice" >
                        <LoadCreateInvoice />
                    </Route>
                    <Route path="/updateinvoice" >
                        <LoadUpdateInvoice />
                    </Route>
                    <Route path="/displayinvoice" >
                        <LoadDisplayInvoice />
                    </Route>
                    <Route path="/allinvoices" >
                        <LoadAllInvoices />
                    </Route>
                    <Route>
                        <LoadPageNotFound/>
                    </Route>
                </Switch>
            </BrowserRouter>
        )
    }
}


export default App;