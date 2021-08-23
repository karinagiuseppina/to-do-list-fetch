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
		)
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				console.log(responseAsJson);
			})
			.catch(function(error) {
				console.log("Looks like there was a problem: \n", error);
			});
	}

	useEffect(() => {
		loadTasks();
	}, []);

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
