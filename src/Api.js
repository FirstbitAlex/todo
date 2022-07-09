import axios from 'axios';

export default class TaskService {
	static async getAll(limit = 10, page = 1) {
		const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
			params: {
				_limit: limit,
				_page: page,
			}
		})
		return response
	}

	static async getTaskDetails(id) {
		const response = await axios.get('https://jsonplaceholder.typicode.com/todos/' + id)
		return response
	}

	static async getTaskComments(id, limit = 3) {
		const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}/comments`, {
			params: {
				_limit: limit,
			}
		})
		return response
	}
}