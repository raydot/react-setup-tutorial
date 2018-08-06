import React from "react";
import PropTypes from "prop-types";

const Input = ({ label, text, type, id, value, handleChange}) => (
	<div className="form-group">
		<label htmlFor={label}>{text}</label>
		<input 
			type={type}
			className="form-control"
			id={id}
			value={value}
			onChange={handleChange}
			required
		/>
	</div>
);

//Not sure what's up with the obsession with prop-types,
// but I'm just going with it.
Input.PropTypes = {
	label: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired
}

export default Input;