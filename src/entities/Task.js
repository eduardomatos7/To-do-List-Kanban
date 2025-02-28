export default class Task {
    constructor(id, title, description, status, taskPriority) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.taskPriority = taskPriority;
    }
}