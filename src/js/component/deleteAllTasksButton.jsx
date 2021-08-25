import React from "react";
import PropTypes from "prop-types";

const deleteAllTasksButton = ({ handleDeleteAllItems }) => {
	return (
		<div className="row">
			<div className="col-6 mx-auto my-1 d-flex justify-content-center">
				<button
					type="button"
					className="btn btn-secondary"
					onClick={handleDeleteAllItems}>
					Clean all tasks
				</button>
			</div>
		</div>
	);
};

deleteAllTasksButton.propTypes = {
	handleDeleteAllItems: PropTypes.func
};

export default deleteAllTasksButton;
