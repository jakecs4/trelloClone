export class Column {
    constructor(public name: string, public tasks: string[]) {}

    public removeTask(element: string, taskIndex: number) {
        console.log('removing task');
        this.tasks.splice(taskIndex, 1);
    }

    public addTasks(element: string) {
        this.tasks.push(element);
    }
}