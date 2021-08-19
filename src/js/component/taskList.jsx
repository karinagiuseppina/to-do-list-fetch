import React from "react";
import PropTypes from "prop-types";

const TaskList = prop => {
	const tasks = prop.tasks;

	const taskinHTML = tasks.map((task, index) => (
		<button
			type="button"
			key={index}
			className="list-group-item list-group-item-action">
			{task}
		</button>
	));
	return (
		<div className="list-group">
			{tasks.length ? { taskinHTML } : "No tasks"}
		</div>
	);
};

TaskList.propTypes = {
	tasks: PropTypes.array
};

export default TaskList;
