// src/controllers/userController.ts

import { Request, ResponseToolkit } from '@hapi/hapi';
import { userService } from '../services/userService';

export const userController = {
  createUser: async (request: Request, h: ResponseToolkit) => {
    try {
      const newUser = await userService.createUser(request.payload as any);
      return h.response(newUser).code(201);
    } catch (error) {
      console.log("error")
      return h.response({ error: error }).code(500);
    }
  },

  getAllUsers:async (request:Request, h:ResponseToolkit) => {
    try{
      const allUsers = await userService.getAllUsers()
      return h.response(allUsers).code(200)
    }catch(error){
      return h.response({error : error}).code(500)
    }
    
  },

  getUserById:async(request:Request, h:ResponseToolkit)=>{
    const id = request.params.id
    try {
      const seletedUser = await userService.getUserById(id)
      if(!seletedUser){
        return h.response({message:'User Not Found'})
      }
      return h.response(seletedUser).code(200)
    }catch(error){
      return h.response({error:error}).code(500)
    }
  },

  userUpdate:async(request:Request, h:ResponseToolkit)=>{
    const id = request.params.id
    const payload = request.payload as any
    try {
      const seletedUser = await userService.userUpdate(id, payload)
      if(!seletedUser){
        return h.response({message:'User Not Found'})
      }
      return h.response(seletedUser).code(200)
    }catch(error){
      return h.response({error:error}).code(500)
    }
  },
  deleteUser:async(request:Request, h:ResponseToolkit)=>{
    const id = request.params.id
    try {
      await userService.deleteUser(id)
        return h.response({message:'User Deleted'})
    }catch(error){
      return h.response({error:error}).code(500)
    }
  }

  
};
