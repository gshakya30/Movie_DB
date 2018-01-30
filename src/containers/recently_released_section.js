import React, { Component } from 'react';
import { fetchRecentlyReleasedMovies } from '../actions/index.js';

import { connect } from 'react-redux';


class RecentlyReleasedSection extends Component {

    constructor(props) {
        super(props);
        this.filteredData = {}
    }

    componentDidMount() {
        this.props.fetchRecentlyReleasedMovies();

    }

    renderRecentlyReleased(movieList) {
        return (
            <div className="col-lg-6 col-md-6 col-sm-6" key={movieList.id}>
                <div className="container">
                    <img src={"https://image.tmdb.org/t/p/w250_and_h141_bestv2" + movieList.poster_path} className="img-responsive" />
                    <span>
                    <div className="content">
                        <p>{movieList.title}</p>
                    </div>
                    </span>
                </div>
            </div>
        );
    }


    render() {
        this.filteredData = this.props.recentlyReleased.filter(res => res.poster_path != null);
        console.log(this.filteredData);
        return (
            <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="d-flex justify-content-center">
                    <h3>Recently Released</h3>
                </div>
                <div className="row">
                    {this.filteredData.splice(0, 9).map(this.renderRecentlyReleased)}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { recentlyReleased: state.recentlyReleasedMovies }
}

export default connect(mapStateToProps, { fetchRecentlyReleasedMovies })(RecentlyReleasedSection);