import * as assert from "assert";
import { MongoMemoryServer } from "mongodb-memory-server";
import { connect, connection } from "mongoose";
import { Task } from "../src/model/task";
import { Comment } from "../src/model/comment";
import { TaskService } from "../src/service/task.service";
import { CommentService } from "../src/service/comment.service";
const taskCreate: Task = {
  id:"",
  title: "Test",
  text: "This is a test task",
  status: "TODO",

} as Task;

const commentCreate: Comment = {
  id:"",
  title: "Test",
  text: "This is a test comment",
  taskId: "",
  name:"Sophie",
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
    const result_comments = await CommentService.readAll();
    assert.strictEqual(result_comments.length, 1);
  });

  it("should delete one comment and return id", async () => {
    const id_deleted = await CommentService.deleteOne(commentCreate.id);
    const result_comments = await CommentService.readAll();
    assert.strictEqual(result_comments.length, 0);

  });
  
});
