## Task 1: Backend

Extend the NodeJS project provided to you with the following functionality:

1. Ammend the code so it connects to a local mongodb on startup and loads data from there.

   - connect to the db on startup
   - create a mongoose model for the tasks to load tasks from the database

2. create REST endpoints using express.js to serve/update data from a mongo db.

   - get all tasks (/tasks)
   - get a task by ID (/tasks/ID)
   - update a task by ID (tasks/ID)
   - [OPTIONAL] Add a new task (/tasks)
   - [OPTIONAL] Delete a task by ID (/tasks/ID)
     Return appropriate errors for the following cases:
   - the ID does not match an ID of a task in the database
   - the database operation does not complete as expected

3. [OPTIONAL] Create the model (including mongoose model) for Comments.

   - Each Comment belongs to exactly one Task - choose an appropriate connection between the two models
   - Each Comment has a non-empty text field containing the content of the comment
   - A Task can have many comments.

4. [OPTIONAL] create REST endpoints using express.js to

   - get all comments for a task (/tasks/ID/comments)
   - create a new comment belonging to a task (/tasks/ID/comments)
   - delete a comment that belongs to a task (/tasks/ID/comments/ID)
   -  Return appropriate errors for the following cases:
   - trying to create a comment for a task that cannot be found
   - trying to delete a comment that does not exist
   - trying to create a comment that has no text in it
   - trying to retrieve comments for a task that does not exist.

5. Write appropriate unit tests that check the functionality of your code.
   - at least one unit test that simulates a case where data should be returned
   - at least one unit test that simulates a case where a rejection/exception should be triggered
     Make sure to use appropriate mocking to only test your own code.

NOTE: This project was set up using Node 18

## For recruters

1. Ammend the code so it connects to a local mongodb on startup and loads data from there.
   - **Important:** create database "development" in order to be able to connect
   - connect to the db on startup,
   - make sure you are using mongo on port 27017
  
2. Setup back-end

   - `npm install`
   - `npm run start`
   - `npm run test`

3. Test driven development using Mocha, all 12 tests should pass, run ``npm run test```

   ✔ should add one task and return it

   ✔ should read one task and return it

   ✔ should read all task and return a list

   ✔ should delete one task and return id

   ✔ should throw an error when reading a non-existent task

   ✔ should throw an error when deleting a non-existent task

   ✔ should add one comment and return it

   ✔ should read one comment and return it

   ✔ should read all comments and return a list

   ✔ should delete one comment and return id

   ✔ should throw an error when reading a non-existent comment

   ✔ should throw an error when deleting a non-existent comment
   

4.  Service-Oriented Architecture (SOA) pattern, also commonly known as a modular or layered architecture.

![image](https://github.com/adrielkirch/assessment-backend/assets/36992911/3b5789de-87a1-4845-9c15-4f55929a40a8)

![image](https://github.com/adrielkirch/assessment-backend/assets/36992911/56f7b641-18a7-48be-9aeb-9bd41162b656)


NOTE: This project was set up using Node v18.17.0
