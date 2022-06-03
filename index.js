// Write your solution in this file!
let employee={
    name: "Edwin",
    streetAddress:"Nairobi"
   }
   function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployee={...employee};
    newEmployee[key]=value;
    return newEmployee;
   }
   function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee
}
function deleteFromEmployeeByKey(employee, key){
    const deleteEmp={...employee}
    delete deleteEmp[key]
   return deleteEmp;
}
function  destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
} 