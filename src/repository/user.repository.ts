import UserModel, { User } from "../model/user";

export class UserRepository {
  public static async createOne(user: User): Promise<User> {
    const userEntity = await UserModel.create(user);
    return userEntity;
  }

  public static async readByEmail(email: string): Promise<User | null> {
    const user = await UserModel.findOne({ email });
    return user;
  }

  public static async loginOne(
    email: string,
    password: string
  ): Promise<User | null> {
    const user = await UserModel.findOne({ email: email, password: password });
    return user;
  }
}
