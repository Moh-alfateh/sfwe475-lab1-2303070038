Question	Your answer
Method   	GET
Status code  	200 OK
Content-Type response header   	application/json; charset=utf-8
What is in the body?    	A JSON object containing userId, id, title, and completed

Now visit https://jsonplaceholder.typicode.com/todos/99999 (note the invalid ID). Look at the status code shown in the Network tab. Which family is it in — 2xx, 3xx, 4xx or 5xx — and what does that family mean?

404 belongs to the 4xx family.

The 4xx status codes mean the request could not be fulfilled because of a problem with the client/request 

Look at the address bar for the page you just visited. Identify and label three parts of the URL: the scheme (before the ://), the host (the server name), and the path (everything after the host).?

Scheme: https

Host: jsonplaceholder.typicode.com

Path: /todos/99999


6.Visit https://jsonplaceholder.typicode.com/todos?userId=1. Identify the query string in this URL (the part after the ?). In one sentence, explain what it is filtering.
7.In the Network tab, browse any site you normally use and find a POST request — for example, submitting a search box, a login form, or a comment. Click it and compare its method to the GET requests you inspected earlier. What is different about what a POST request is asking the server to do?


Query string: userId=1

Filtering: It filters the /todos results to return only todos belonging to user ID 1


Look at the version numbers now listed under "devDependencies" in package.json (for example "typescript": "^5.6.0"). In notes/errors.md, explain in your own words: what does the ^ mean, and what do the three numbers (major.minor.patch) each represent?
The ^ means the dependency can be updated to newer compatible versions without moving to the next major version; for example, ^7.0.2 allows versions from 7.0.2 up



