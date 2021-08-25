import React, { useState, useEffect } from "react";

import TitleHeader from "./TitleHeader.jsx";
import InputNewItem from "./inputNewItem.jsx";
import TaskList from "./taskList.jsx";
import DeleteAllTasksButton from "./deleteAllTasksButton.jsx";

const Container = () => {
	const [list, setList] = useState([]);
	const [inputValue, setInputValue] = React.useState("");
	const [labelPosition, setlabelPosition] = React.useState(-1);
	const [existUser, setExistUser] = React.useState(true);

	const handleAddItem = newItem => {
		const duplicatedElement = list.findIndex(
			item => item.label.toLowerCase() === newItem.label.toLowerCase()
		);

		if (duplicatedElement === -1) {
			if (labelPosition === -1) {
				setList([...list, newItem]);
			} else {
				let newList = list;
				newList.splice(labelPosition, 1, newItem);
				setList(newList);
			}
		} else {
			alert("¡Lo sentimos! La tarea ya está añadida");
		}
	};

	const handleDeleteItem = pos => {
		let temp = [...list];
		temp.splice(pos, 1);
		setList(temp);
	};
	const handleEditItem = (task, pos) => {
		setlabelPosition(pos);
		setInputValue(task);
	};

	const handleDeleteAllItems = () => {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/karinagiuseppina",
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
		setExistUser(false);
	};

	function createNewUser(user) {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/" + user, {
			method: "POST",
			mode: "cors",
			redirect: "follow",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify([])
		});
	}

	async function loadTasks() {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/karinagiuseppina"
		).then(function(response) {
			if (response.ok) {
				setList(response.json());
			}
		});
	}
	async function uploadTasks(newList) {
		fetch(
			"https://assets.breatheco.de/apis/fake/todos/user/karinagiuseppina",
			{
				method: "PUT",
				body: JSON.stringify(newList),
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
	}

	useEffect(() => {
		createNewUser("karinagiuseppina");
		loadTasks();
	}, []);

	useEffect(() => {
		uploadTasks(list);
	}, [list]);

	return (
		<div className="container-fluid">
			<TitleHeader title="To do's" />
			<InputNewItem
				handleAddItem={handleAddItem}
				inputValue={inputValue}
				setInputValue={setInputValue}
			/>
			<TaskList
				list={list}
				handleDeleteItem={handleDeleteItem}
				handleEditItem={handleEditItem}
			/>
			<DeleteAllTasksButton handleDeleteAllItems={handleDeleteAllItems} />
		</div>
	);
};

export default Container;
