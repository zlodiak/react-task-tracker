import React, { useEffect } from 'react';
import { connect } from 'react-redux';

function Profile(props) {
    console.log('Profile render', props)

    useEffect(() => {
        const gender = props.gender;
        console.log(gender);
    });

    return (
        <>
            Profile
        </>
    );
}

const mapStateToProps = state => {
    return {
      gender: state.authReducer.gender,
    }
  }
  
export default connect(mapStateToProps, {  })(Profile);
