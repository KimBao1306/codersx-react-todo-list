import React from 'react';
import './LoginForm.css';

function LoginForm(props) {
	return (
		<div className="container">
			<h2>Sign in</h2>
			<form>
				<div className="form-group">
					<label htmlFor="usn">Username</label>
					<input type="text" placeholder={props.email} id="usn" />
				</div>
				<div className="form-group">
					<label htmlFor="psw">Password</label>
					<input type="password" placeholder="*************" id="psw" />
				</div>
				<div className="form-group">
					<input type="submit" value="Signin to Coders-x" id="signin" />
				</div>
			</form>
			<div className="keep-signed">
				<input type="checkbox" />
				<span>Keep me signed in</span>
			</div>
			<div className="forgot">
				<p>
					<a href="#">Forgot username?</a>
				</p>
				<p>
					<a href="#">Forgot password?</a>
				</p>
			</div>
		</div>
	);
}

export default LoginForm;
