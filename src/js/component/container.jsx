import React, { useState, useEffect } from "react";

import TitleHeader from "./TitleHeader.jsx";
import InputNewItem from "./inputNewItem.jsx";
import TaskList from "./taskList.jsx";

const Container = () => {
	const [list, setList] = useState([]);
	const [inputValue, setInputValue] = React.useState("");

	const handleAddItem = newItem => {
		const duplicatedElement = list.findIndex(
			item =>
				item.inputValue.toLowerCase() ===
				newItem.inputValue.toLowerCase()
		);

		if (duplicatedElement === -1) {
			setList([...list, newItem]);
		} else {
			alert("¡Lo sentimos! La tarea ya está añadida");
		}
	};

	const handleDeleteItem = pos => {
		const temp = [...list];
		temp.splice(pos, 1);
		setList(temp);
	};

	return (
		<div className="container-fluid">
			<TitleHeader title="To dos" />
			<InputNewItem
				handleAddItem={handleAddItem}
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>
			<TaskList list={list} handleDeleteItem={handleDeleteItem} />
		</div>
	);
};

export default Container;
