import React from "react";
import PropTypes from "prop-types";

const displayLiTask = ({ task, position, handleDeleteItem }) => {
	const deleteTask = () => {
		handleDeleteItem(position);
	};
	return (
		<li
			key={position}
			className="list-group-item d-flex justify-content-between gray-color">
			<span>{task}</span>
			<i onClick={deleteTask}>x</i>
		</li>
	);
};

displayLiTask.propTypes = {
	task: PropTypes.string,
	position: PropTypes.number,
	handleDeleteItem: PropTypes.func
};

export default displayLiTask;
