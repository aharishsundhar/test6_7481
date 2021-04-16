import { Request, Response } from 'express';
import {DatasDao} from '../dao/DatasDao';
import { CustomLogger } from '../config/Logger'
let Datas = new DatasDao();

export class DatasService {
    
    constructor() { }
    
    public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into DatasService.ts: GpDelete')
     const  DatasId = req.params.id;
     Datas.GpDelete(DatasId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from DatasService.ts: GpDelete')
         callback(response);
         });
    }
public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into DatasService.ts: GpGetNounById')
     const  DatasId = req.params.id;
     Datas.GpGetNounById(DatasId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from DatasService.ts: GpGetNounById')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into DatasService.ts: GpUpdate')
     const  DatasData = req.body;
     Datas.GpUpdate(DatasData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from DatasService.ts: GpUpdate')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into DatasService.ts: GpSearch')
     const  DatasData = req.query;
     Datas.GpSearch(DatasData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from DatasService.ts: GpSearch')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into DatasService.ts: GpSearchForUpdate')
     const  DatasData = req.body;
     Datas.GpSearchForUpdate(DatasData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from DatasService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into DatasService.ts: GpGetAllValues')
     
     Datas.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from DatasService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into DatasService.ts: GpCreate')
     const  DatasData = req.body;
     Datas.GpCreate(DatasData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from DatasService.ts: GpCreate')
         callback(response);
         });
    }


}