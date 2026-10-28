export async function fetchTodo(id: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    if (!response.ok) {
      console.error(`Server error: ${response.status} ${response.statusText}`);
      return null;
    }
    

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Network error:", error);
    return null;
  }
  
}
export async function fetchTodosSequential(ids: number[]) {
  const results = [];
  for (const id of ids) {
    results.push(await fetchTodo(id));
  }
  return results;
}

export async function fetchTodos(ids: number[]) {
  return Promise.all(ids.map((id) => fetchTodo(id)));
}