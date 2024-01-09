import { Schema, model } from 'mongoose';


const addressSchema = {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    postalCode: { type: String },
    country: { type: String },
};
const employeeschema = new Schema({
  employeeName: { type: String, required: true },
  designation: { type: String, required: true },
  employeeId: { type: String },
  salary: { type: Number },
  type: { type: String, required: true },
  address: { type: addressSchema },
  phoneNumber:{type: String, required: true }
});

const EmployeeDetail = model('employee', employeeschema);
export default EmployeeDetail;
