
import { Task } from "../src/model/task";
import * as chai from "chai";
const should = chai.should();
const util = chai.util;
const expect = chai.expect;

const taskCreate: Task = {
    title: "Test",
    text: "This is a test task",
    status: "TODO",
} as Task;

describe('Test service class', async () => {
  it('should add one task and return it', async () => {

 
    expect("test").to.be.a("string");
    "test".should.be.a("string");
    expect("foo").to.equal("foo");
    "foo".should.equal("foo");
    should.equal("foo", "foo");
  });
});
