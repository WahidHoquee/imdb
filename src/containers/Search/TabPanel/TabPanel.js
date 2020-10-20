import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, Grid } from "@material-ui/core";

const useStyles = makeStyles({
    Paper: {
        padding: "10px",
        margin: "15px",
        cursor: "pointer"
    }
});

const TabPanel = props => {
    const { value, index, data } = props;
    // console.log({value, index, data});

    const classes = useStyles();
    const baseURL = "https://image.tmdb.org/t/p/w185/";
    
    let elements = data.map(el => (
        <Paper
            className={classes.Paper}
            role="tabpanel"
            key={el.id}
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            onClick = {() => props.clickHandler(el.id, props.type, el.title ? el.title : el.original_name)}        
        >
            <Grid container spacing={3}>
                <Grid item xs={4} spacing={5}>
                    <img src={baseURL + el.poster_path} />
                </Grid>
                <Grid item xs={8}>
                    <h1>{el.title ? el.title : el.original_name}</h1>
                    <h5>{el.release_date ? el.release_date : el.first_air_date }</h5>
                    <p>{el.overview}</p>
                </Grid>
            </Grid>
        </Paper>
    ));
    return <div>{elements}</div>;
};
// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired
// };
export default TabPanel;
