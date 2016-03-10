export class TodoModel {
  status: string;
  title: string;

  constructor({title = '', status = ''} = {}) {
  	this.title = title;
  	this.status = status;
  }
}
