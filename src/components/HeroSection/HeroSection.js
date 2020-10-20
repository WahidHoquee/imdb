import React from "react";
import { Paper, Container, Grid, Fab } from "@material-ui/core";
import { List, Favorite, Bookmark, Grade, PlayArrow } from '@material-ui/icons';

const HeroSection = props => {
    const baseURL = "https://image.tmdb.org/t/p";
    const {
        id,
        backdrop_path,
        title,
        overview,
        vote_average,
        poster_path
    } = props.details;
    console.log(baseURL + "/w185/" + poster_path);

    return (
        <Paper>
            <Container>
                <Grid container>
                    <Grid item xs={4}>
                        <img
                            src={baseURL + "/w185/" + poster_path}
                            alt={title}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <h1>{title}</h1>
                        <p>{overview}</p>
                        <div>
                            <Fab size="medium" color="secondary" aria-label="add">
                                <List />
                            </Fab>
                            <Fab size="medium" color="secondary" aria-label="add">
                                <Favorite />
                            </Fab>
                            <Fab size="medium" color="secondary" aria-label="add">
                                <Bookmark />
                            </Fab>
                            <Fab size="medium" color="secondary" aria-label="add">
                                <Grade />
                            </Fab>
                            <Fab size="medium" color="secondary" aria-label="add">
                                <PlayArrow />
                            </Fab>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

export default HeroSection;
