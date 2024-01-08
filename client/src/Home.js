// --- Post bootstrap -----
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import withRoot from "./withRoot"
import Map from "./page/map/Map"
import AppAppBar from "./layout/AppAppBar"
import AppFooter from "./layout/AppFooter"
import ProductCategories from "./page/home/ProductCategories"
import ProductHero from "./page/home/ProductHero"
import ProductValues from "./page/home/ProductValues"

import { compose } from "redux"
import { connect } from "react-redux"

const App = (props) => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Index />
                </Route>
                <Route exact path="/map">
                    <Map />
                </Route>
            </Switch>
        </Router>
    )
}

const Index = () => {
    return (
        <React.Fragment>
            <AppAppBar />
            <ProductHero />
            <ProductValues />
            <ProductCategories />
            <AppFooter />
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        apiResponse: state.apiResponse,
        suburb: state.suburb,
        address: state.address,
    }
}

export default withRoot(compose(connect(mapStateToProps))(App))
