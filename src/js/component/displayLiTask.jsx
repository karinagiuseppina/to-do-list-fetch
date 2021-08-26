import React from "react";
import PropTypes from "prop-types";

const displayLiTask = ({
	task,
	position,
	handleDeleteItem,
	handleEditItem
}) => {
	const deleteTask = () => {
		handleDeleteItem(position);
	};

	const editTask = () => {
		handleEditItem(task, position);
	};

	return (
		<li
			key={position}
			className="list-group-item d-flex justify-content-between gray-color">
			<span className="flex-grow-1">{task}</span>
			<i onClick={editTask}>Editar</i>
			<i onClick={deleteTask}>Borrar</i>
		</li>
	);
};

displayLiTask.propTypes = {
	task: PropTypes.string,
	position: PropTypes.number,
	handleDeleteItem: PropTypes.func,
	handleEditItem: PropTypes.func
};

export default displayLiTask;
