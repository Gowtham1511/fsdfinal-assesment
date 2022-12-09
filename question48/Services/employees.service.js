const Employees = [{name:"gowtham",employeeId:1,role:"FullStackDeveloper"},
                   {name:"sreekanth",employeeId:2,role:"FrontEndDeveloper"},
                   {name:"hari",employeeId:3,role:"BackEndDeveloper"},
                ];



module.exports.getAllEmployees = async(req,res,next)=>{

    res.send(Employees);

};
module.exports.getEmployeebyid= async(req,res,next)=>
{
   for(let i=0;i<Employees.length;i++)
   {
      if(Employees[i].employeeId == req.params.employeeId)
      {
        res.send(Employees[i]);
      }
   }
};

