import React, { Component } from 'react';
import { connect } from 'react-redux';


class MovieDetailedPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-lg-6">
                <div className="d-flex justify-content-center">
                    <h3>Top Rated</h3>
                </div>
                <div className="row">
                    {this.selectedMovie.poster_path}
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return { selectedMovie: state.selectedMovie }
}

export default connect(mapStateToProps)(MovieDetailedPage);