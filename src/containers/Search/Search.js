import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Tabs, Tab } from "@material-ui/core";

import * as actions from '../../store/actions/index'

import TabPanel from "./TabPanel/TabPanel";

class Search extends Component {
    state = {
        value: 0
    };
    a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            "aria-controls": `vertical-tabpanel-${index}`
        };
    }
    handleChange = (event, newValue) => {
        this.setState({ value: newValue });
    };
    elementClickHandler = (id,type,name) => {
        console.log(id,type,name);
        this.props.history.push('/movies/'+id+'-'+name);

        this.props.storeElement(id,type)
    }
    render() {
        let resultCollection = Object.keys(this.props.queryResult).map(
            (key, index) => {
                return {
                    type: key,
                    index: index,
                    data: this.props.queryResult[key]
                };
            }
        );
        // console.log(resultCollection);

        let resultData = null;
        if (resultCollection) {
            resultData = resultCollection.map(result => {
                return (
                    <TabPanel
                        value={this.state.value}
                        index={result.index}
                        key={result.type}
                        type={result.type}
                        data={result.data}
                        clickHandler = {this.elementClickHandler}
                    />
                );
            });
        }

        return (
            <Container fixed>
                <div
                    style={{
                        flexGrow: 1,
                        backgroundColor: "#fff",
                        display: "flex",
                        height: 400
                    }}
                >
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={this.state.value}
                        onChange={this.handleChange}
                        aria-label="Vertical tabs example"
                        style={{
                            borderRight: `1px solid #333`,
                            textAlign: "left",
                            fontWeight: 600
                        }}
                    >
                        <Tab label={"Movies " + this.props.queryResult.movie.length} {...this.a11yProps(0)} />
                        <Tab label={"TV Shows " + this.props.queryResult.tv.length}  {...this.a11yProps(1)} />
                        <Tab label={"People " + this.props.queryResult.person.length}  {...this.a11yProps(2)} />
                        <Tab label={"Collections " + this.props.queryResult.collection.length}  {...this.a11yProps(3)} />
                        <Tab label={"Keywords " + this.props.queryResult.keyword.length}  {...this.a11yProps(5)} />
                        <Tab label={"Companies " + this.props.queryResult.company.length}  {...this.a11yProps(4)} />
                        <Tab label={"Networks " + this.props.queryResult.movie.length}  {...this.a11yProps(6)} />
                    </Tabs>
                    <div
                        style={{
                            flexDirection: "column",
                            width: "70%"
                        }}
                    >
                        {resultData}
                    </div>
                </div>
            </Container>
        );
    }
}
const mapStateToProps = state => ({
    queryResult: state.search.queryResult
});
const mapDispatchToProps = dispatch => ({
    storeElement: (id,elType) => dispatch(actions.storeElement(id,elType))
})
export default connect(mapStateToProps,mapDispatchToProps)(Search);
