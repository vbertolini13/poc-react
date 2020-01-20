import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from '../components/home/Profile';
import Home from '../components/home/Home';
import AppFrame from '../components/AppFrame';
import { isLogin } from '../utils';
import { getProfile } from '../actions/ActionProfile';
import { profile } from '../selector/profile';
import { apiUpdateProfile } from '../api/ApiProfile';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
    }

    componentDidMount() {
        isLogin();
        this.props.getProfile(localStorage.getItem('correo'));
    }

    handleOnHomeSubmit = () => {
        console.log('homeSubmit');
    };

    handleOnProfileSubmit = (values) => {
        const { nombre, apellido, correo } = values.profile;
        const fecha_modificacion = new Date();
		apiUpdateProfile(nombre, apellido, correo, fecha_modificacion);
        this.props.getProfile(localStorage.getItem('correo'));
        this.props.history.goBack();
    };
	
    handleOnBack = () => {
        this.props.history.goBack();
    };

    renderHomeBody = () => ( 
		<Route path = "/home"
        	children = {
            	({ match: isHome }) => ( 
					<Route path = "/profile"
                		children = {
                    		({ match: isProfile }) => this.renderHomeControl(isHome, isProfile)
                	}/>
            	)
        	}
		/>
    );

    renderHomeControl = (isHome, isProfile) => {
        const HomeControl = isHome ? Home : isProfile ? Profile : Home;
        const HomeSubmit = isHome ? this.handleOnHomeSubmit : isProfile ? this.handleOnProfileSubmit : this.handleOnHomeSubmit;
        return (<HomeControl {...this.props }
					onSubmit = { HomeSubmit }
					onBack = { this.handleOnBack }/>
        );
    };

    render() {
		return (
            <div>
                <AppFrame 
                    header='Home'
                    body={this.renderHomeBody()}/>
            </div>
        );
    }
}

HomeContainer.propTypes = {
    getProfile: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};

HomeContainer.defaultProps = {
    profile: {
        nombre: '',
        apellido: ''
    }
};

const mapStateToProps = (state) => ({
    profile: profile(state)
});

const mapDispatchToProps = { getProfile };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));