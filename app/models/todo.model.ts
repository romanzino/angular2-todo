export class TodoModel {
  status: string;
  title: string;

  constructor({title}) {
  	this.title = title;
  	this.status = 'started';
  }
}
