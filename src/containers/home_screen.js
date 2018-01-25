import React, { Component } from 'react';


export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                    <a className="navbar-brand" href="#">Movie Teaser</a>
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Movies</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Link 1</a>
                                <a className="dropdown-item" href="#">Link 2</a>
                                <a className="dropdown-item" href="#">Link 3</a>
                            </div>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Tv Shows</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Link 1</a>
                                <a className="dropdown-item" href="#">Link 2</a>
                                <a className="dropdown-item" href="#">Link 3</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                People</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Link 1</a>
                                <a className="dropdown-item" href="#">Link 2</a>
                                <a className="dropdown-item" href="#">Link 3</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <form className="input-group">
                    <input
                        placeholder="Search for a movie, tv show, person..."
                        className="form-control" />
                </form>

                <div className="row">
                    <div className="col-lg"><h3>On Tv</h3></div>
                    <div className="col-lg"><h3>In Theaters</h3></div>
                </div>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     console.log(state.userList);
//     return { userList: state.userList }
// }

// export default connect(mapStateToProps)(UserList);