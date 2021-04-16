import { Request, Response, NextFunction } from "express";
import { DatasController } from '../controller/DatasController';


export class Routes {
    private Datas: DatasController = new DatasController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/Datas/:id').delete(this.Datas.GpDelete);
app.route('/Datas/:id').get(this.Datas.GpGetNounById);
app.route('/Datas').put(this.Datas.GpUpdate);
app.route('/Datas/get/search').get(this.Datas.GpSearch);
app.route('/Datas/get/update').put(this.Datas.GpSearchForUpdate);
app.route('/Datas').get(this.Datas.GpGetAllValues);
app.route('/Datas').post(this.Datas.GpCreate);
     }

}