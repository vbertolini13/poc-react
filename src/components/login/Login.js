import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import AppActions from '../AppActions';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import './styles.css'
import { Grid, Row, Col } from 'react-flexbox-grid';
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
		style = {{width: 300}} 
		{...input}
		{...custom}/>
);

const Login = ({ handleSubmit, submitting, onRegister, onRemember }) => {
	return (

		<form onSubmit={handleSubmit}>
			<Grid>
				<Row center="xs">
				<Avatar>
    				<AssignmentIcon />
  				</Avatar>
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
					<AppActions>
						<Button type="submit" variant="contained" color="primary" disabled={submitting}>Ingresar</Button>
					</AppActions>
				</Row>
				<Row center="xs">
					<Col>
						<Button color="secondary" type="button" onClick={onRegister}>Registrar cuenta nueva</Button>
					</Col>
					<Col>
						<Button color="secondary" type="button" onClick={onRemember}>Olvide mi contraseña</Button>
					</Col>
				</Row>
			</Grid>
		</form>

	);
}

Login.propTypes = {
	onRegister: PropTypes.func.isRequired,
	onRemember: PropTypes.func.isRequired,
}

export default reduxForm({ form: 'Login' })(Login);