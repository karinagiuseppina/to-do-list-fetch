import React, { useState, useEffect } from "react";

import TitleHeader from "./TitleHeader.jsx";
import InputNewItem from "./inputNewItem.jsx";
import TaskList from "./taskList.jsx";

const Container = () => {
	const [list, setList] = useState([]);

	const handleAddItem = newItem => {
		const duplicatedElement = list.findIndex(
			item => item.inputValue === newItem.inputValue
		);

		if (duplicatedElement === -1) {
			setList([...list, newItem]);
		} else {
			alert("¡Lo sentimos! La tarea ya está añadida");
		}
	};

	const handleDeleteItem = position => {
		const temp = [...list];
		temp.splice(position, 1);
		//const updateList = list.filter(item => !(item === list[position]));
		setList(temp);
	};

	return (
		<div className="container-fluid">
			<TitleHeader title="To dos" />
			<InputNewItem handleAddItem={handleAddItem} />
			<TaskList list={list} handleDeleteItem={handleDeleteItem} />
		</div>
	);
};

export default Container;
