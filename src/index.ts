import { fetchTodo, fetchTodos, fetchTodosSequential } from "./api";

async function main() {
  const todo = await fetchTodo(1);
  console.log(todo);

  const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.time("sequential");
  await fetchTodosSequential(ids);
  console.timeEnd("sequential");

  console.time("parallel");
  await fetchTodos(ids);
  console.timeEnd("parallel");
}

main();