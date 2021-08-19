import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const DisplayTasks = prop => {
	const tasksinHTML = prop.tasks.map((task, i) => (
		<li key={i} className="list-group-item">
			{task}
		</li>
	));

	// 2) add the array planetsInHTML inside the innerHTML of this ul
	return <ul className="list-group m-5">{tasksinHTML}</ul>;
};

DisplayTasks.propTypes = {
	tasks: PropTypes.array
};

export default DisplayTasks;
