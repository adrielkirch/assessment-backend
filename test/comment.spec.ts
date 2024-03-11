import * as assert from "assert";
import { MongoMemoryServer } from "mongodb-memory-server";
import { connect, connection } from "mongoose";
import { Task } from "../src/model/task";
import { Comment } from "../src/model/comment";
import { TaskService } from "../src/service/task.service";
import { CommentService } from "../src/service/comment.service";

let taskCreate: Task = {
  id:"",
  title: "Test",
  text: "This is a test task",
  status: "TODO",

} as Task;

let commentCreate: Comment = {
  id:"",
  text: "This is a test comment",
  taskId: "",
  userId:"65ee829ec9ae6b9cd9723a00",
} as Comment;


describe("Test service class", () => {
  let mongoServer: MongoMemoryServer;

  before(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();
    await connect(uri, {
     
    });
  });
  after(async () => {
    await connection.db.dropDatabase();
    await connection.close();
    await mongoServer.stop();
  });

  it("should add one comment and return it", async () => {
    const insertedTask = await TaskService.createOne(taskCreate);
    taskCreate.id = insertedTask.id
    commentCreate.taskId = insertedTask.id
    assert.strictEqual(typeof   taskCreate.id, "string");
    assert.strictEqual(taskCreate.id.length, 24);
    const insertedComment = await CommentService.createOne(commentCreate);
    commentCreate.id = insertedComment.id
  });

  it("should read one comment and return it", async () => {
    const result_comment = await CommentService.readOne(commentCreate.id);
    assert.strictEqual(typeof result_comment.id, "string");
    assert.strictEqual(result_comment.id.length, 24);
  });

  it("should read all comments and return a list", async () => {
    const result_comments = await CommentService.readAllByTaskId(taskCreate.id);
    assert.strictEqual(result_comments.length, 1);
  });

  it("should delete one comment and return id", async () => {
    await CommentService.deleteOne(commentCreate.id);
    const result_comments = await CommentService.readAllByTaskId(taskCreate.id);
    assert.strictEqual(result_comments.length, 0);

  });

  it("should throw an error when reading a non-existent comment", async () => {
    try {
      await CommentService.readOne("000000000000000000000000");
      assert.fail("Expected an error to be thrown");
    } catch (error) {
      assert.strictEqual(error instanceof Error, true);
    }
  });

  it("should throw an error when deleting a non-existent comment", async () => {
    try {
      await CommentService.deleteOne("000000000000000000000000");
      assert.fail("Expected an error to be thrown");
    } catch (error) {
      assert.strictEqual(error instanceof Error, true);
    }
  });
  
});
