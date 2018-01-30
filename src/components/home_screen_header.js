import React, { Component } from 'react';


export default class HomeScreenHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="fixed-top">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <a className="navbar-brand font-weight-bold" href="/home"><h2 style={{ color: '#6db56f' }}>Movie Teaser</h2></a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbardrop" data-toggle="dropdown">
                                Movies</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Popular</a>
                                <a className="dropdown-item" href="#">Top Rated</a>
                                <a className="dropdown-item" href="#">Upcoming</a>
                                <a className="dropdown-item" href="#">Now Playing</a>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbardrop" data-toggle="dropdown">
                                Tv Shows</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Popular</a>
                                <a className="dropdown-item" href="#">Top Rated</a>
                                <a className="dropdown-item" href="#">On Tv</a>
                                <a className="dropdown-item" href="#">Airing Today</a>

                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link" href="#" id="navbardrop" data-toggle="dropdown">
                                People</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Popular People</a>
                            </div>
                        </li>
                    </ul>

                    <ul className="navbar-nav">
                        <div className="login-div">
                            <li className="nav-item dropdown">
                                <a className="nav-link" href="#" id="navbardrop" data-toggle="dropdown">
                                    Account</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Profile</a>
                                    <a className="dropdown-item" href="#">Settings</a>
                                    <a className="dropdown-item" href="#">Log out</a>
                                </div>
                            </li>
                        </div>
                    </ul>
                </nav>
                <form className="input-group">
                    <input
                        placeholder="Search for a movie, tv show, person..."
                        className="form-control" />
                </form>

            </div>
        );
    }
}