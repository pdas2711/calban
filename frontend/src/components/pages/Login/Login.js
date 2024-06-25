import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const LoginPage = (props) => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	let isAuthenticated = false;
	const authUserHandler = event => {
		event.preventDefault();
		let loggingInUser = {
			authUsername: username,
			authPassword: password
		};
		setUsername('');
		setPassword('');
		if (loggingInUser.authUsername !== "" && loggingInUser.authPassword !== "") {
			isAuthenticated = true;
			console.log("success");
		} else {
			isAuthenticated = false;
		}
		if (isAuthenticated) {
			navigate("/dashboard")
		}
	};
	const usernameChangeHandler = event => {
		setUsername(event.target.value);
	};
	const passwordChangeHandler = event => {
		setPassword(event.target.value);
	};
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
