import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UsersController from '../controllers/UsersController';

const profileRouter = Router();
const usersController = new UsersController();

profileRouter.use(ensureAuthenticated);

profileRouter.put('/', usersController.create);

export default profileRouter;
