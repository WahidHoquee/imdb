import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./HOC/Layout/Layout";
import Home from "./containers/Home/Home";
import Discover from "./containers/Discover/Discover";
import Movies from "./containers/Movies/Movies";
import People from "./containers/People/People";
import TvShows from "./containers/Tv-Shows/TvShows";
import Search from "./containers/Search/Search"
import Details from "./containers/Details/Details";

const App = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/movies/:id" component={Details} />
                <Route path="/search" component={Search}/>
                <Route path="/people" component={People} />
                <Route path="/tv-shows" component={TvShows} />
                <Route path="/movies" component={Movies} />
                <Route path="/discover" component={Discover} />
                <Route path="/" component={Home} />
            </Switch>
        </Layout>
    );
};

export default App;
