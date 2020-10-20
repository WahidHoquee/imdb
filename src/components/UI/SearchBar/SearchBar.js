import React from "react";
import { Container, TextField } from "@material-ui/core";
import color from "@material-ui/core/colors/amber";

const SearchBar = props => (
    <Container fixed style={{ padding: "30px",marginBottom:'50px' }}>
        <form onSubmit={props.submit}>
            <TextField
                id="search"
                label="Search for movies, tv-shows, persons ....."
                value={props.value}
                onChange={props.change}
                style={{ width: "100%" }}
            />
        </form>
    </Container>
);

export default SearchBar;
