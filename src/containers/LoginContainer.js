import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import Login from '../components/login/Login';
import Register from '../components/login/Register';
import Remember from '../components/login/Remember';
import AppFrame from '../components/AppFrame';
import { login, isLogin } from '../utils';
import fb from '../firebase';
import Cookies from 'universal-cookie';

class LoginContainer extends Component {

    componentDidMount() {
        isLogin();
    }

    handleLoginSubmit = values => {
        const { correo, password } = values;
          fb.auth()
            .signInWithEmailAndPassword(correo, password)
            .then((data) => {
                login(correo);
                const cookies = new Cookies();
                cookies.set('correo', correo, { secure: true, httpOnly: true });
                this.props.history.push('/home');
            })
            .catch((err) => {
                alert(JSON.stringify(err.message));
            });
    }

    handleRegisterSubmit = values => {
        const { nombre, apellido, correo, password, repassword } = values;
        if(password === repassword) {
          fb.auth()
            .createUserWithEmailAndPassword(correo, password)
            .then(data => {
                const db = fb.firestore();
                const fecha = new Date();
                //var request = JSON.parse(JSON.stringify(this.area));
                db.collection('usuarios')
                    .doc(correo)
                    .set({nombre, apellido, correo, fecha}, { merge: true })
                    .catch(function (err) {
                        alert(JSON.stringify(err));
                    });
                alert('Usuario Creado');
                this.props.history.push('/login');
            })
            .catch(err => {
              alert(JSON.stringify(err.message));
            });
        } else {
            alert('Password does not match');
        }
    }

    handleRememberSubmit = values => {
        const { correo } = values;
          fb.auth()
            .sendPasswordResetEmail(correo)
            .then(data => {
                alert('Email enviado para reiniciar contraseña');
            });
    }

    handleOnRegister = () => {
        this.props.history.push('/register');
    }

    handleOnRemember = () => {
        this.props.history.push('/remember');
    }

    handleOnBack = () => {
        this.props.history.goBack();
    }

    renderLoginBody = () => (
        <Route path="/register" children={
            ( { match: isRegister } ) => (
                <Route path="/remember" children={
                    ( { match: isRemember } ) => (
                        this.renderLoginControl(isRegister, isRemember))
            } /> )
        } />
    )

    renderLoginControl = (isRegister, isRemember) => {
        const LoginControl = isRegister ? Register : (isRemember ? Remember : Login);
        const LoginSubmit = isRegister ? this.handleRegisterSubmit : (isRemember ? this.handleRememberSubmit : this.handleLoginSubmit);
        return <LoginControl {...this.props}
                    onSubmit={LoginSubmit}
                    onRegister={this.handleOnRegister}
                    onBack={this.handleOnBack} 
                    onRemember={this.handleOnRemember}/>
    }

    render() {
        return (
            <div>
                <AppFrame 
                    header='Login'
                    body={this.renderLoginBody()}/>
            </div>
        );
    }
}

LoginContainer.propTypes = {

};

export default withRouter(LoginContainer);