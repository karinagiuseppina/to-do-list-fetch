import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const inputNewItem = ({ handleAddItem }) => {
	const [inputValue, setInputValue] = React.useState("");

	const onClick = () => {
		handleAddItem({ inputValue });

		setInputValue("");
	};

	return (
		<div className="row">
			<div className="col-6 mx-auto d-flex justify-content-stretch">
				<input
					className="flex-grow-1 p-2"
					type="text"
					onChange={e => setInputValue(e.target.value)}
					value={inputValue}
				/>
				<button
					className="p-2"
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
