import React from "react";
import { Link } from "react-router-dom";

import classes from "./Logo.css";
import logo from "../../../assets/logo.png";

const Logo = props => (
    <Link to="/">
        <div className={classes.Logo}>
            <img src={logo} alt="The Movie DB" />
        </div>
    </Link>
);

export default Logo;
