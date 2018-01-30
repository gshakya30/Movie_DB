import React, { Component } from 'react';
import TopRatedSection from '../containers/top_rated_section'
import RecentlyReleasedSection from '../containers/recently_released_section'

export default class HomeScreen extends Component {

    render() {
        return (
            <div className="main" style={{ marginTop: '180px' }}>
                <div className="row">
                    <RecentlyReleasedSection />
                    <TopRatedSection />
                </div>
            </div >
        );
    }
}