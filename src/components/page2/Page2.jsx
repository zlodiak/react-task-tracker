import React from 'react';
import { connect } from 'react-redux';
import { addClickCreator } from '../../redux/mainReducer';

function Page2(props) {
    console.log('page2 render', props)
    return (
        <>
            page2
        </>
    );
}

const mapStateToProps = state => {
    return {
      clicks: state.mainReducer.clicks,
    }
}

export default connect(mapStateToProps, {addClickCreator})(Page2);
