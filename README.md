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

3. Create the model (including mongoose model) for Comments.
      - Each Comment belongs to exactly one Task - choose an appropriate connection between the two models
      - Each Comment has a non-empty text field containing the content of the comment
      - A Task can have many comments.

4. [OPTIONAL] create REST endpoints using express.js to
      - get all comments for a task (/tasks/ID/comments)
      - create a new comment belonging to a task (/tasks/ID/comments)
      - delete a comment that belongs to a task (/tasks/ID/comments/ID)
   Return appropriate errors for the following cases:
      - trying to create a comment for a task that cannot be found
      - trying to delete a comment that does not exist
      - trying to create a comment that has no text in it
      - trying to retrieve comments for a task that does not exist.

5. Write appropriate unit tests that check the functionality of your code.
      - at least one unit test that simulates a case where data should be returned
      - at least one unit test that simulates a case where a rejection/exception should be triggered
   Make sure to use appropriate mocking to only test your own code.

NOTE: This project was set up using Node 18