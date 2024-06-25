import React, {useState} from "react";
import {Link} from "react-router-dom";

const LoginPage = (props) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const authUserHandler = event => {
		event.preventDefault();
		let loggingInUser = {
			authUsername: username,
			authPassword: password
		};
		setUsername('');
		setPassword('');
		let isAuthenticated = props.checkAuth(loggingInUser);
		if (isAuthenticated) {
			<Link to="/dashboard"/>
		}
	};
	const usernameChangeHandler = event => {
		setUsername(event.target.value);
	}
	const passwordChangeHandler = event => {
		setPassword(event.target.value);
	}
	return <div>
			<h1>Login</h1>
			<form className="login-form" onSubmit={authUserHandler}>
				Username: <input className="user-textbox" type="text" value={username} onChange={usernameChangeHandler}/><br></br>
				Password: <input className="password-textbox" type="text" value={password} onChange={passwordChangeHandler}/><br></br>
				<br></br>
				<button type="submit">Login</button>
			</form>
		</div>
};

export default LoginPage;
