import { User } from "../model/user";
import { UserRepository } from "../repository/user.repository";
import { SecurityUtil } from "../util/security.util";

export class UserService {
  public static async createOne(user: User): Promise<User> {
    let exist = await UserRepository.readByEmail(user.email);
    if (exist) {
      throw new Error("Email already exists");
    }
    const hashPassword = SecurityUtil.generateHashWithSalt(user.password);
    user.password = hashPassword;
    let newUser = await UserRepository.createOne(user);
    newUser = newUser.toObject();
    delete newUser.password; 
    return newUser;
  }
  public static async loginOne(user: User): Promise<User> {
    const hashPassword = SecurityUtil.generateHashWithSalt(user.password);
    let userResult = await UserRepository.loginOne(user.email, hashPassword);
    
    if (!userResult) {
      throw new Error("Email and/or Password incorrect(s)");
    }
    userResult = userResult.toObject();
    const token = SecurityUtil.generateJsonwebtoken(user._id);
    console.log("token ->",token)
    userResult.token = token;
    delete userResult.password; 
    return userResult;
  }
}
