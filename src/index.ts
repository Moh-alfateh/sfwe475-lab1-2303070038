import { addTask, findTask, Task } from "./tasks";

let tasks: Task[] = [];

tasks = addTask(tasks, "Read Chapter 1");

const task = findTask(tasks, 1);

if (task.ok) {
  console.log(task.task.title);
} else {
  console.log(task.error);
}

const missingTask = findTask(tasks, 99);

if (missingTask.ok) {
  console.log(missingTask.task.title);
} else {
  console.log(missingTask.error);
}