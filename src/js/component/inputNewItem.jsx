import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const inputNewItem = ({ inputValue, setInputValue, handleItem }) => {
	const addTask = event => {
		if (event.key.toLowerCase() === "enter") {
			if (inputValue === "") {
				alert("¡Lo sentimos! No puedes añadir tareas vacías.");
			} else {
				handleItem({ label: inputValue, done: false });
				setInputValue("");
			}
		}
	};

	return (
		<div className="row">
			<div className="col-6 mx-auto my-1 d-flex justify-content-stretch">
				<input
					className="flex-grow-1 p-2 border border-gray gray-color"
					type="text"
					onChange={e => setInputValue(e.target.value)}
					onKeyDown={addTask}
					value={inputValue}
				/>
			</div>
		</div>
	);
};

inputNewItem.propTypes = {
	inputValue: PropTypes.string,
	setInputValue: PropTypes.func,
	handleAddItem: PropTypes.func
};

export default inputNewItem;
