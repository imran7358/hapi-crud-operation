import { ServerRoute } from '@hapi/hapi';
import { userController } from '../controller/userController';

const userRoutes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/users',
    handler: userController.getAllUsers,
  },
  {
    method: 'POST',
    path: '/users',
    handler: userController.createUser,
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: userController.getUserById,
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    handler: userController.userUpdate,
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: userController.deleteUser,
  },
];

export default userRoutes;
