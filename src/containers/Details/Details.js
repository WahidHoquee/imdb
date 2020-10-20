import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions/index";
import Auxilary from "../../HOC/Auxilary/Auxilary";
import HeroSection from "../../components/HeroSection/HeroSection";

class Details extends Component {
    componentDidMount() {
        this.props.fetchMovieDetails(this.props.id, this.props.elType);
    }
    render() {
        const details = this.props.detail;
        let info = null;
        if (this.props.detail) {
            info = (
                <div>
                    <HeroSection
                        // title={details.title}
                        // overview={details.overview}
                        // vote_average={details.vote_average}
                        details={details}
                    />
                </div>
            );
        }
        return <Auxilary>{info}</Auxilary>;
    }
}

const mapStateToProps = state => ({
    id: state.details.id,
    elType: state.details.elType,
    detail: state.details.detail
});

const mapDispatchToProps = dispatch => ({
    fetchMovieDetails: (id, type) =>
        dispatch(actions.fetchMovieDetails(id, type))
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
