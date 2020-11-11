import React from 'react';
import { connect } from 'react-redux';

import { setGenderThunk } from '../../redux/actions';


function Profile(props) {
    console.log('Profile render', props)

    function setGender(e) {
        console.log(e.target.value)
        props.setGenderThunk(e.target.value, props.login);
    }

    function renderGenderOptions() {
        return (
            props.genders.map((gender, i) => {
                return <option value={ i } key={ i }>{ props.genders[i] }</option>
            })
        );
    }

    function renderGenderSelect() {
        return (
            <select value={ props.gender } onChange={ setGender }>
                { renderGenderOptions() }
            </select>
        );
    }

    return (
        <> 
            { props.genders && renderGenderSelect() }
        </>
    );
}

const mapStateToProps = state => {
    return {
        login: state.authReducer.isLogged,
        gender: state.authReducer.gender,
        genders: state.optionsReducer.genders,
    }
  }
  
export default connect(mapStateToProps, { setGenderThunk })(Profile);
