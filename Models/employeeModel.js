import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    Name :{
        type: String
    },
    Title:{
        type:String
    },
    Department:{
        type: String
    },
    EmployeeImage:{
        type:String
    }
})
const employeeModel = mongoose.model('employeesDB', employeeSchema);
export default employeeModel;
//     EmployeeID: 1,
//     Name: 'Nancy Davolio',
//     Title: 'Sales Representative',
//     Department: 'Sales',
//     EmployeeImage:
//     avatar3,