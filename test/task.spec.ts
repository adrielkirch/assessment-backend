import * as assert from "assert";
import { MongoMemoryServer } from "mongodb-memory-server";
import { connect, connection } from "mongoose";
import { Task } from "../src/model/task";
import { TaskService } from "../src/service/task.service";

const taskCreate: Task = {
  id:"",
  title: "Test",
  text: "This is a test task",
  status: "TODO",
} as Task;

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

  it("should add one task and return it", async () => {
    const insertedTask = await TaskService.createOne(taskCreate);
    taskCreate.id = insertedTask.id
    assert.strictEqual(typeof   taskCreate.id, "string");
    assert.strictEqual(taskCreate.id.length, 24);
  });

  it("should read one task and return it", async () => {
    const result_task = await TaskService.readOne(taskCreate.id);
    assert.strictEqual(typeof   result_task.id, "string");
    assert.strictEqual(result_task.id.length, 24);
  });

  it("should read all task and return a list", async () => {
    const result_tasks = await TaskService.readAll();
    assert.strictEqual(result_tasks.length, 1);
  });

  it("should delete one task and return id", async () => {
    const id_deleted = await TaskService.deleteOne(taskCreate.id);
    const result_tasks = await TaskService.readAll();
    assert.strictEqual(result_tasks.length, 0);
    
  });
  
});
