import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { fetchUserList } from '../actions/index';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {term : ''}
    }

    onInputChange(event){
        this.props.fetchUserList(event.target.value);
        this.setState({term: event.target.value});
    }

    render(){
        return(
            <form className="input-group">
                <input 
                    placeholder="Find a member...." 
                    className="form-control"
                    value={this.state.term}
                    onChange={e=>this.onInputChange(e)}/>
                           <div class="alert alert-success">
                           <strong>Success!</strong> Indicates a successful or positive action.
                         </div>
            </form>
        );
    }
}

function mapDisPatchToProps(dispatch) {
    return bindActionCreators({ fetchUserList }, dispatch);
}

export default connect(null, mapDisPatchToProps)(SearchBar);