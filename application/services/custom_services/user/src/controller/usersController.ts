import { Request, Response } from 'express';
import { usersService } from '../service/usersService';
import { CustomLogger } from '../config/Logger'
let users = new usersService();

export class usersController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
users.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usersController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usersController.ts: GpDelete');
    })}
public GpGetNounById(req: Request, res: Response) {
users.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usersController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usersController.ts: GpGetNounById');
    })}
public GpUpdate(req: Request, res: Response) {
users.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usersController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usersController.ts: GpUpdate');
    })}
public GpSearch(req: Request, res: Response) {
users.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usersController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usersController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
users.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usersController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usersController.ts: GpSearchForUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
users.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usersController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usersController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
users.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into usersController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from usersController.ts: GpCreate');
    })}


}