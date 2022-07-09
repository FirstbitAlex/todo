import React from "react";
import "./task-item.css";

const TaskItem = (props) => {
	// console.log(props);
	return (
		<div className="item-wrap">
			<div
				onClick={() => props.deleteTask(props.task.id)}
				className={`item-complete ${
					props.task.completed ? "yes" : "no"
				}`}
			></div>
			<div className="item-title">{props.task.title}</div>
			<div className="item-title">{props.task.userId}</div>
			<div className="item-actions">
				<button
					onClick={() => props.remove(props.task.id)}
					className="setStatus"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default TaskItem;
