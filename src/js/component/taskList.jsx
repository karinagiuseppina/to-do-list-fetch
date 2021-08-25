import React from "react";
import PropTypes from "prop-types";

import DisplayLiTask from "./displayLiTask.jsx";
import ItemsLeft from "./itemsLeft.jsx";

const TaskList = ({ list, handleDeleteItem }) => {
	let taskinHTML = (
		<li className="list-group-item gray-color">No tasks, add a task.</li>
	);
	if (list.length) {
		taskinHTML = list.map((task, index) => (
			<DisplayLiTask
				key={index}
				task={task.label}
				position={index}
				handleDeleteItem={handleDeleteItem}
			/>
		));
	}

	return (
		<div className="row">
			<div className="col-6 mx-auto">
				<ul className="list-group">
					{taskinHTML}
					<ItemsLeft number={list.length} />
				</ul>
			</div>
		</div>
	);
};

TaskList.propTypes = {
	list: PropTypes.array,
	handleDeleteItem: PropTypes.func
};

export default TaskList;
