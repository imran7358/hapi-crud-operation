import { AppDataSource } from "../db/dbConfig";
import { UserList } from "../entities/user.entity";

export const userService = {
    getAllUsers :async () : Promise<UserList[]> => {
        const userRepository = AppDataSource.getRepository(UserList)
        return await userRepository.find(); 
    },
    createUser: async (userData: Partial<UserList>): Promise<UserList> => {
        const userRepository = AppDataSource.getRepository(UserList);
        const user = userRepository.create(userData);
        return await userRepository.save(user);
      },
      getUserById:async(id:number):Promise<UserList | null>=>{
        const userRepository = AppDataSource.getRepository(UserList) 
        return userRepository.findOneBy({id})
      },
      userUpdate:async(id:number, userDetails: Partial<UserList>):Promise<UserList | null>=>{
        const userRepository = AppDataSource.getRepository(UserList) 
        userRepository.update(id,userDetails)
        return userRepository.findOneBy({id})
      },
      deleteUser:async(id:number):Promise<void>=>{
        const userRepository = AppDataSource.getRepository(UserList) 
        await userRepository.delete(id)
        
      }
}