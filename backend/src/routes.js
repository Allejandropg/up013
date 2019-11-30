import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AvailableController from './app/controllers/AvailableController';
import AppointmentController from './app/controllers/AppointmentController';
import NotificationController from './app/controllers/NotificationController';

import authMiddleware from './app/middlewares/auth';
import ScheduleController from './app/controllers/ScheduleController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/users', UserController.read);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/sessions/token', SessionController.storeRegister);

routes.use(authMiddleware);
// users
routes.put('/users', UserController.update);
// providers
routes.get('/providers', ProviderController.index);
routes.get('/providers/:providerId/available', AvailableController.index);

// Appointment
routes.get('/appointments', AppointmentController.index);
routes.post('/appointments', AppointmentController.store);
routes.delete('/appointments/:id', AppointmentController.delete);

// schedules
routes.get('/schedule', ScheduleController.index);

// notification
routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

// files
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
