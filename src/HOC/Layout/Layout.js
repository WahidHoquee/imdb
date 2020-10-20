import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import * as actions from '../../store/actions/index';

import Auxilary from '../Auxilary/Auxilary';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import SearchBar from '../../components/UI/SearchBar/SearchBar';

// import classes from './Layout.css';


class Layout extends Component {
    state = {
        searchValue: ''
    }
    onSearchHandler = (e) => {
        e.preventDefault();
        this.props.searchSubmit(this.state.searchValue);
        this.props.history.push('/search')
    }

    onInputChange = (e) => {
        this.setState({searchValue:e.target.value})
    }

    render() {
        return (
            <Auxilary>
                <Header/>
                <SearchBar value={this.state.searchValue} submit={this.onSearchHandler} change={this.onInputChange}/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>                           
            </Auxilary>
        )
    }
}
const mapdispatchToProps = dispatch => ({
    searchSubmit: (query) => dispatch(actions.search(query))
})
export default withRouter(connect(null,mapdispatchToProps)(Layout));