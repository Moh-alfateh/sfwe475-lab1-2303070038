# Reflection

What is the difference between a 404 and a 500?

404 means the requested resource was not found, usually because the URL or resource does not exist. A **500** means an unexpected error occurred on the server while processing a valid request.

 Why does TypeScript strict mode reject tasks.find as a Task` return type?

The find() method may not find a matching task, so it can return undefined instead of a Task . Strict mode requires us to handle this possibility rather than incorrectly claiming that the result will always be a Task.

 Why do we work on a branch instead of committing to main?

A branch lets us work on changes separately without affecting the stable main branch. We can test and review the changes before merging them into main.
