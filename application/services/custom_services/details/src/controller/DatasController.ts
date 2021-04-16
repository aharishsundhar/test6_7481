import { Request, Response } from 'express';
import { DatasService } from '../service/DatasService';
import { CustomLogger } from '../config/Logger'
let Datas = new DatasService();

export class DatasController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
Datas.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into DatasController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from DatasController.ts: GpDelete');
    })}
public GpGetNounById(req: Request, res: Response) {
Datas.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into DatasController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from DatasController.ts: GpGetNounById');
    })}
public GpUpdate(req: Request, res: Response) {
Datas.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into DatasController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from DatasController.ts: GpUpdate');
    })}
public GpSearch(req: Request, res: Response) {
Datas.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into DatasController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from DatasController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
Datas.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into DatasController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from DatasController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
Datas.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into DatasController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from DatasController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
Datas.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into DatasController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from DatasController.ts: GpCreate');
    })}


}