import React, { useState, useEffect } from "react";

import TitleHeader from "./TitleHeader.jsx";
import InputNewItem from "./inputNewItem.jsx";
import TaskList from "./taskList.jsx";

const Container = () => {
	const [list, setList] = useState([]);

	const handleAddItem = addItem => {
		setList([...list, addItem]);
	};
	return (
		<div className="container-fluid">
			<TitleHeader title="To dos" />
			<InputNewItem handleAddItem={handleAddItem} />
			<TaskList list={list} />
		</div>
	);
};

export default Container;
// 			<TaskList list={list} setList={setList} />
