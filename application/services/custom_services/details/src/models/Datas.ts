
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const DatasSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   address: String,
   phone: Number
})

const DatasModel = mongoose.model('Datas', DatasSchema, 'Datas');
export default DatasModel;
