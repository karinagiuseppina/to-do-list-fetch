import React from "react";
import PropTypes from "prop-types";

const TaskList = prop => {
	const list = prop.list;

	let taskinHTML = <li className="list-group-item">No tasks, add a task</li>;
	if (list.length) {
		taskinHTML = list.map((task, index) => (
			<li
				className="list-group-item d-flex justify-content-between"
				key={index}>
				<span>{task.inputValue}</span>
				<i>x</i>
			</li>
		));
	}

	return (
		<div className="row">
			<div className="col-6 mx-auto">
				<ul className="list-group">{taskinHTML}</ul>
			</div>
		</div>
	);
};

TaskList.propTypes = {
	list: PropTypes.array
};

export default TaskList;
