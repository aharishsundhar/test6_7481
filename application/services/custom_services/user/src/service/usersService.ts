import { Request, Response } from 'express';
import {usersDao} from '../dao/usersDao';
import { CustomLogger } from '../config/Logger'
let users = new usersDao();

export class usersService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usersService.ts: GpDelete')
     const  usersId = req.params.id;
     users.GpDelete(usersId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usersService.ts: GpDelete')
         callback(response);
         });
    }
public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usersService.ts: GpGetNounById')
     const  usersId = req.params.id;
     users.GpGetNounById(usersId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usersService.ts: GpGetNounById')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usersService.ts: GpUpdate')
     const  usersData = req.body;
     users.GpUpdate(usersData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usersService.ts: GpUpdate')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usersService.ts: GpSearch')
     const  usersData = req.query;
     users.GpSearch(usersData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usersService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usersService.ts: GpSearchForUpdate')
     const  usersData = req.body;
     users.GpSearchForUpdate(usersData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usersService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usersService.ts: GpGetAllValues')
     
     users.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from usersService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into usersService.ts: GpCreate')
     const  usersData = req.body;
     users.GpCreate(usersData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from usersService.ts: GpCreate')
         callback(response);
         });
    }


}