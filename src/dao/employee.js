import EmployeeDetail from '../modals/employee.js'

export const createEmployeeDao = async (data) => {

    return new Promise(async (resolve, reject) => {
        try {
            return EmployeeDetail.create(data)
                .then((response) => {
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
        } catch (error) {
            reject(error);
        }

    });
};

export const getAllEmployeeDao = async ()=>{
    return new Promise(async (resolve, reject) => {
        try {
            return EmployeeDetail.find()
                .then((response) => {
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
        } catch (error) {
            reject(error);
        }

    });
}

export const getEmployeebyIdDao = async (empId)=>{
    return new Promise(async (resolve, reject) => {
        try {
            return EmployeeDetail.find({employeeId:empId})
                .then((response) => {
                    resolve(response);
                }).catch((err) => {
                    reject(err);
                });
        } catch (error) {
            reject(error);
        }

    });
}


export const deleteagentbyIdDao = async (empId) => {
  
    return new Promise(async (resolve, reject) => {
      return await EmployeeDetail.deleteOne({ employeeId:empId })
        .then((response) => {
          console.log(response, 'response');
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };


  export const updateAgentDao = async (data, employeeId) => {
    return new Promise(async (resolve, reject) => {
      return await EmployeeDetail.findOneAndUpdate({ employeeId }, { $set: data }, { new: true })
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
  