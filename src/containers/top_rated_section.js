import React, { Component } from 'react';
import { fetchTopRatedMovies } from '../actions/index.js';
import { connect } from 'react-redux';


class TopRatedSection extends Component {

    constructor(props) {
        super(props);
        this.filteredData = {}
    }

    componentDidMount() {
        this.props.fetchTopRatedMovies();
    }

    renderTopRatedMovies(movieList) {
        return (
            <div className="col-lg-6 col-md-6 col-sm-6" key={movieList.id}>
                <div className="container">
                    <img src={"https://image.tmdb.org/t/p/w250_and_h141_bestv2" + movieList.poster_path} className="img-responsive" />
                    <div className="content">
                        <p>{movieList.title}</p>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        this.filteredData = this.props.topRatedMovies.filter(res => res.poster_path != null);

        return (
            <div className="col-lg-6">
                <div className="d-flex justify-content-center">
                    <h3>Top Rated</h3>
                </div>
                <div className="row">
                    {this.filteredData.splice(0, 9).map(this.renderTopRatedMovies)}
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return { topRatedMovies: state.topRatedMovies }
}

export default connect(mapStateToProps, { fetchTopRatedMovies })(TopRatedSection);