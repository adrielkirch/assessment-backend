import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
  email: string;
  password?: string;
  createdAt?: Date;
  token?: string;
}

const UserSchema = new Schema<User>({
  email: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model<User>("User", UserSchema);

export default UserModel;
