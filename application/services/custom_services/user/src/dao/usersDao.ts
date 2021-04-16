import * as mongoose from 'mongoose';
import usersModel from '../models/users';
import { CustomLogger } from '../config/Logger'


export class usersDao {
    private users = usersModel;
    constructor() { }
public GpDelete(usersId, callback){
new CustomLogger().showLogger('info', 'Enter into usersDao.ts: GpDelete')

this.users.findByIdAndRemove(usersId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usersDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetNounById(usersId, callback){
new CustomLogger().showLogger('info', 'Enter into usersDao.ts: GpGetNounById')

this.users.findById(usersId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usersDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(usersData, callback){
new CustomLogger().showLogger('info', 'Enter into usersDao.ts: GpUpdate')

this.users.findOneAndUpdate({ _id: usersData._id }, usersData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usersDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(usersData, callback){
new CustomLogger().showLogger('info', 'Enter into usersDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(usersData).forEach(
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
this.users.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usersDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(usersData, callback){
new CustomLogger().showLogger('info', 'Enter into usersDao.ts: GpSearchForUpdate')

this.users.findOneAndUpdate({ _id: usersData._id }, usersData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usersDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into usersDao.ts: GpGetAllValues')

this.users.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usersDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(usersData, callback){
new CustomLogger().showLogger('info', 'Enter into usersDao.ts: GpCreate')
let temp = new usersModel(usersData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from usersDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}