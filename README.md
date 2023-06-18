# bank_api

** #Node.js web framework can be used to create the API service.
#REST API endpoints to get the Bank List and its branch details for a specific branch**

Time taken to complete this assignment. Approximately 1.5 hr including deployment 



Steps involved in the project 

Set up a new Express.js project: Created a new directory for the project and initialized it with a package.json file using npm init -y.

Installed necessary dependencies: Installed the required packages (express, csv-parser, fs) using npm install express csv-parser fs.

Created the Express server: Created an Express application in the server.js file and required the necessary modules.

Defined the routes and endpoints: Defined two endpoints: /banks for fetching the bank list and /banks/:bankName/branches for fetching branch details for a specific bank.

Handled the bank list endpoint: Read the CSV file using the fs module and the CSV-parser middleware. Extracted the unique bank names and sent them as a JSON response.

Handled the branch details endpoint: Read the CSV file and matched the requested bank name with the bank name in each row. If a match was found, sent the corresponding branch details as a JSON response. If no match was found, sent a 404 error response.

Added error handling: Defined a fallback route for handling invalid routes and sent a 404 error response. Also handled cases like file not found or CSV parsing errors and sent appropriate error responses.

Started the server: Set the server to listen on port 3000 and displayed a console message to indicate that the server has started.

Tested the endpoints: Tested the endpoints using the tool Postman, ensuring that the responses matched the expected results for different scenarios.
