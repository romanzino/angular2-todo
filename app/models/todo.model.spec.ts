import {TodoModel} from './todo.model';

describe('Todo Model', () => {
	let todoModel: TodoModel;

	it('should create new todo model', () => {
		let todoTitle = 'First Todo';
		let todoStatus = 'Status';

		todoModel = new TodoModel({
			title: todoTitle,
			status: todoStatus
		});

		expect(todoModel.title).toBe(todoTitle);
		expect(todoModel.status).toBe(todoStatus);
	});
});