export class TodoModel {
  status: string;
  title: string;

  constructor({title = undefined, status = undefined} = {}) {
  	this.title = title;
  	this.status = status;
  }
}
