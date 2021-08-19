import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const inputNewItem = ({ handleAddItem }) => {
	const [inputValue, setInputValue] = React.useState("");

	const onClick = () => {
		handleAddItem({
			done: false,
			inputValue
		});

		setInputValue("");
	};

	return (
		<div>
			<input
				type="text"
				onChange={e => setInputValue(e.target.value)}
				value={inputValue}
			/>
			<button onClick={onClick} disabled={inputValue ? "" : "disabled"}>
				+
			</button>
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
