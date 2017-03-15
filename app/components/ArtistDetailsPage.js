// ./src/components/book/ArtistDetailsPage.js
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ArtistDetails from './ArtistDetails'

class ArtistDetailsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <h1>Artist Details Page</h1>
                <ArtistDetails />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // state mappings here
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // actions mappings here
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistDetailsPage);
