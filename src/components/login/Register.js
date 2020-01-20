import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import AppActions from '../AppActions';
import TextField from '@material-ui/core/TextField';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Button from '@material-ui/core/Button';
import './styles.css';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Avatar from '@material-ui/core/Avatar';

const required = value => value ? undefined : 'Required';
const email = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
const minLength = value => value && value.length < 6 ? `Must be ${6} characters or more` : undefined;

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    style={{ width: 300 }}
    {...input}
    {...custom}
  />
);

const Register = ({ handleSubmit, submitting, onBack }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Row center="xs">
            <Avatar>
              <AssignmentIcon />
            </Avatar>
          </Row>
          <Row center="xs">
            <Field
              name="nombre"
              component={renderTextField}
              type="text"
              label="Nombre"
              validate={[required]}></Field>
          </Row>
          <Row center="xs">
            <Field
              name="apellido"
              component={renderTextField}
              type="text"
              label="Apellido"
              validate={[required]}></Field>
          </Row>
          <Row center="xs">
            <Field
              name="correo"
              component={renderTextField}
              type="email"
              label="Email"
              validate={[required, email]}></Field>
          </Row>
          <Row center="xs">
            <Field
              name="password"
              component={renderTextField}
              type="password"
              label="Password"
              validate={[required, minLength]}></Field>
          </Row>
          <Row center="xs">
            <Field
              name="repassword"
              component={renderTextField}
              type="password"
              label="Re-Password"
              validate={[required, minLength]}></Field>
          </Row>
          <Row center="xs">
            <Col>
              <AppActions>
                <Button type="submit" variant="contained" color="primary" disabled={submitting}>Registrar</Button>
              </AppActions>
            </Col>
            <Col>
              <AppActions>
                <Button type="button" variant="contained" color="secondary" onClick={onBack}>Volver</Button>
              </AppActions>
            </Col>
          </Row>
        </Grid>
      </form>
    </div>
  );
}

Register.propTypes = {
  onBack: PropTypes.func.isRequired,
}

export default reduxForm({ form: 'Register' })(Register);