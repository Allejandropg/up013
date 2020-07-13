import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController'; // perfil
import UsersController from './app/controllers/UsersController'; // usuarios controlados pelo administrador
import LoadUserController from './app/controllers/LoadUserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AvailableController from './app/controllers/AvailableController';
import CommandController from './app/controllers/CommandController';
import LoadCommandController from './app/controllers/LoadCommandController';
import CompletCommandController from './app/controllers/CompletCommandController';
import NotificationController from './app/controllers/NotificationController';
import ProductController from './app/controllers/ProductController';
import LoadProductController from './app/controllers/LoadProductController';
import ServiceController from './app/controllers/ServiceController';
import LoadServiceController from './app/controllers/LoadServiceController';

import authMiddleware from './app/middlewares/auth';
import ScheduleController from './app/controllers/ScheduleController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', (req, res) => {
  return res.status(200).json({ success: ' Acessou' });
});
routes.get('/users', UserController.read);
routes.post('/users', UserController.store);
routes.post('/users/forgotpassword/', UserController.send);
routes.post('/sessions/', SessionController.store);
routes.post('/sessions/token/', SessionController.storeRegister);
routes.put('/sessions/updateForgot/', SessionController.updateForgot);

routes.use(authMiddleware);
// users
routes.put('/users', UserController.update);

// providers
routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

// Command
routes.get('/commands', CommandController.index);
routes.post('/commands', CommandController.store);
routes.delete('/commands/:id', CommandController.delete);

/** ------------ controle da parte administrativa ---------------------------*/

// controle de usuário pelo administrador
routes.get('/usuarios', UsersController.read);
routes.get('/usuarios/:id', LoadUserController.read);
routes.post('/usuarios', UsersController.store);
routes.put('/usuarios/:id', UsersController.update);
// routes.delete('/usuarios/:id', UsersController.delete);

// Command
routes.get('/comanda', CompletCommandController.index);
routes.get('/comanda/:id', LoadCommandController.index);
routes.post('/comanda', CompletCommandController.store);
routes.delete('/comanda/:id', CompletCommandController.delete);

// Products
routes.get('/products', ProductController.read);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

routes.get('/products/:id', LoadProductController.read);

// Services
routes.get('/services', ServiceController.read);
routes.post('/services', ServiceController.store);
routes.put('/services/:id', ServiceController.update);
routes.delete('/services/:id', ServiceController.delete);

routes.get('/services/:id', LoadServiceController.read);

// schedules
routes.get('/schedule', ScheduleController.index);

// notification
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

// files
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
