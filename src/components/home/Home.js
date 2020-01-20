import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppActions from '../AppActions';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { logout, isLogin } from '../../utils';
import Button from '@material-ui/core/Button';
import './styles.css';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    isLogin();
  }

  handleOnEditProfile = () => {
    this.props.history.push('/profile');
  }

  handleOnLogout = () => {
    logout();
    this.props.history.push('/login');
  }


  render() {
    return (
      <div>
        <Grid>
          <Row>
            <div><strong>Nombre: </strong><i>{this.props.profile.nombre}</i></div>
          </Row>
          <Row>
            <div><strong>Apellido: </strong><i>{this.props.profile.apellido}</i></div>
          </Row>
          <Row>
            <div><strong>Correo: </strong><i>{this.props.profile.correo}</i></div>
          </Row>
          <Row>
            <AppActions>
              <Col>
                <Button type="button" variant="contained" color="primary" onClick={this.handleOnEditProfile}>Editar</Button>
              </Col>
            </AppActions>
            <AppActions>
              <Col>
                <Button type="button" variant="contained" color="secondary" onClick={this.handleOnLogout}>Salir</Button>
              </Col>
            </AppActions>
          </Row>
        </Grid>
      </div>
	  );
  }

}

Home.propTypes = {
	profile: PropTypes.object.isRequired
}

export default Home;