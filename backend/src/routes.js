import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AvailableController from './app/controllers/AvailableController';
import CommandController from './app/controllers/CommandController';
import NotificationController from './app/controllers/NotificationController';
import ProductController from './app/controllers/ProductController';

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

routes.get('/products', ProductController.read);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.delete);

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

// schedules
routes.get('/schedule', ScheduleController.index);

// notification
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

// files
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
