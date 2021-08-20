import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const inputNewItem = ({ handleAddItem }) => {
	const [inputValue, setInputValue] = React.useState("");

	const onClick = () => {
		handleAddItem({ inputValue });
		setInputValue("");
	};

	const addTask = event => {
		if (event.key === "Enter") {
			if (inputValue === "") {
				alert("¡Lo sentimos! No puedes añadir tareas vacías.");
			} else {
				handleAddItem({ inputValue });
				setInputValue("");
			}
		}
	};

	return (
		<div className="row">
			<div className="col-6 mx-auto my-1 d-flex justify-content-stretch">
				<input
					className="flex-grow-1 p-2 border border-white border-2"
					type="text"
					onChange={e => setInputValue(e.target.value)}
					onKeyDown={addTask}
					value={inputValue}
				/>
				<button
					className="p-2 border border-white border-2 pink-color"
					onClick={onClick}
					disabled={inputValue ? "" : "disabled"}>
					+
				</button>
			</div>
		</div>
	);
};

inputNewItem.propTypes = {
	handleAddItem: PropTypes.func
};

export default inputNewItem;

// React.useEffect(() => {
// 	window.addEventListener("keydown", event => {
// 		if (event.key === "Enter") {
// 			setInputValue(event.target.value);
// 			validateInput();
// 			console.log(event);
// 		}
// 	});
// }, []);
