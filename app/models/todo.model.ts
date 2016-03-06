export class TodoModel {
  status: string;
  title: string;

  constructor({title, status = 'started'}) {
  	this.title = title;
  	this.status = status;
  }
}
