import React, { useEffect, useState } from "react";
import TaskService from "../../Api";
import TaskItem from "../item/TaskItem";
import { useFetching } from "../../useFetching";

const TaskList = () => {
	const [tasks, setTasks] = useState([]);
	const [fetchTasks, isTasksLoading, taskError] = useFetching(
		async (limit, page) => {
			const response = await TaskService.getAll(limit, page);
			setTasks([...tasks, ...response.data]);
			// const totalCount = response.headers["x-total-count"];
			// setTotalPages(getPageCount(totalCount, limit));
		}
	);

	const deleteTask = (delId) => {
		setTasks(tasks.filter((c) => c.id !== delId));
	};

	useEffect(() => {
		fetchTasks(10, 1);
	}, []);

	return (
		<div className="list-wrap">
			{tasks.map((task) => (
				<TaskItem key={task.id} task={task} remove={deleteTask} />
			))}
		</div>
	);
};

export default TaskList;
