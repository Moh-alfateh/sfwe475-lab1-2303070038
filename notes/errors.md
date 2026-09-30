TypeScript Errors

1. `tasks` has no defined type, so TypeScript cannot know what the array contains.

2. `title` has no type in `addTask`.

3. `done` must be a boolean, but `"false"` is a string.

4. `find()` can return `undefined`, but `findTask` expects to return a `Task`.

5. `dueDate` is optional, so it can be `undefined`.

6. `findTask(tasks, 99)` can return `undefined`, so `.title` may not exist.
