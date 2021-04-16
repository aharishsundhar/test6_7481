import * as mongoose from 'mongoose';
import DatasModel from '../models/Datas';
import { CustomLogger } from '../config/Logger'


export class DatasDao {
    private Datas = DatasModel;
    constructor() { }
public GpDelete(DatasId, callback){
new CustomLogger().showLogger('info', 'Enter into DatasDao.ts: GpDelete')

this.Datas.findByIdAndRemove(DatasId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from DatasDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetNounById(DatasId, callback){
new CustomLogger().showLogger('info', 'Enter into DatasDao.ts: GpGetNounById')

this.Datas.findById(DatasId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from DatasDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(DatasData, callback){
new CustomLogger().showLogger('info', 'Enter into DatasDao.ts: GpUpdate')

this.Datas.findOneAndUpdate({ _id: DatasData._id }, DatasData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from DatasDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(DatasData, callback){
new CustomLogger().showLogger('info', 'Enter into DatasDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(DatasData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.Datas.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from DatasDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(DatasData, callback){
new CustomLogger().showLogger('info', 'Enter into DatasDao.ts: GpSearchForUpdate')

this.Datas.findOneAndUpdate({ _id: DatasData._id }, DatasData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from DatasDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into DatasDao.ts: GpGetAllValues')

this.Datas.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from DatasDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(DatasData, callback){
new CustomLogger().showLogger('info', 'Enter into DatasDao.ts: GpCreate')
let temp = new DatasModel(DatasData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from DatasDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}