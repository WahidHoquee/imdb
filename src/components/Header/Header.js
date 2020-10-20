import React from "react";
import { AppBar, Toolbar, Container } from "@material-ui/core";

import Logo from "../UI/Logo/Logo";
import NavigationItems from "./NavigationItems/NavigationItems";

// import classes from './Header.css';

const Header = () => (
    <AppBar position="static" style={{ backgroundColor: "#081c24" }}>
        <Container fixed>
            <Toolbar>
                <Logo />
                <NavigationItems/>
            </Toolbar>
        </Container>
    </AppBar>
);

export default Header;
