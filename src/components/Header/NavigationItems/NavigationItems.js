import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './NavigationItems.css';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/discover">Discover</NavigationItem>
        <NavigationItem link="/movies">Movies</NavigationItem>
        <NavigationItem link="/tv-shows">TV Shows</NavigationItem>
        <NavigationItem link="/people">People</NavigationItem>
    </ul>
);

export default NavigationItems;
