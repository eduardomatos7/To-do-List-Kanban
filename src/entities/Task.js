export default class Task {
    constructor(id, title, description, status, taskPriority) {
        this.id = id.toString(); 
        this.title = title;
        this.description = description;
        this.status = status;
        this.taskPriority = taskPriority;
    }
}