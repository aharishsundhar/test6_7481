import { Request, Response, NextFunction } from "express";
import { usersController } from '../controller/usersController';


export class Routes {
    private users: usersController = new usersController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/users/:id').delete(this.users.GpDelete);
app.route('/users/:id').get(this.users.GpGetNounById);
app.route('/users').put(this.users.GpUpdate);
app.route('/users/get/search').get(this.users.GpSearch);
app.route('/users/get/update').put(this.users.GpSearchForUpdate);
app.route('/users').get(this.users.GpGetAllValues);
app.route('/users').post(this.users.GpCreate);
     }

}