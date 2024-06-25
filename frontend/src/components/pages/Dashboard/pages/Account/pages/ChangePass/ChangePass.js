import React, {useState} from "react";

const ChangePass = (props) => {
	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confPassword, setCOnfPassword] = useState('');
	const changePassHandler = event => {
	};
	return (
		<div>
			<form className="chng-pass-form" onSubmit={changePassHandler}>
				Current Password: <input className="change-pass-textbox" type="text" value={currentPassword}/><br></br>
				New Password: <input className="change-pass-textbox" type="text" value={newPassword}/><br></br>
				Confirm Password: <input className="change-pass-textbox" type="text" value={confPassword}/><br></br>
				<br></br>
				<button type="submit">Change Password</button>
			</form>
		</div>
	);
};

export default ChangePass;
