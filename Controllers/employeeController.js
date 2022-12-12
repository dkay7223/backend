import employeeModel from '../Models/employeeModel.js'

export const getEmployees = (req, res) => {
   try {
	 employeeModel.find({}, (error, data) => {
	        if (data) {
	            res.json(data)
	        }
	        else {
	            res.json("No Employees Exist")
	        }
	    })
} catch (error) {
	
}
}

export const getEmployeeByID = async (req, res) => {

    try {
        const employee = await employeeModel.findById(req.params.id);
        if (employee) {
            res.json(employee);
        }
        else {
            res.json(null)
        }
    } catch (error) {
        res.json(null)
    }
}

export const addEmployee = async (req, res) => {
    try {
        const employee = req.body;
        const newEmployee = new employeeModel(employee);
        await newEmployee.save();
        res.json(`${employee.Name} Added`)
    } catch (error) {
        res.json("Add failed!!!")
    }
}

export const removeEmployee = async (req, res) => {
    try {
        const employee = await employeeModel.findByIdAndDelete(req.params.id)
        res.json(`${employee.Name} removed`)

    } catch (error) {
        res.json("Delete Failed!")
    }
}

export const updateEmployee = async (req, res) => {
    try {
        const employee = await employeeModel.findById(req.params.id);
        Object.assign(employee, req.body);
        await employee.save();
        res.send({ data: employee });
        console.log({ data: employee });
    } catch (error) {
        res.json("Update Failed")
    }
}
