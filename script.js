// Created a function called collectEmployees

function collectEmployees() {
    let employees = [];
    let keepPrompting = true;
    while (keepPrompting) {
        let firstName = prompt ("Enter First Name");
        if (firstName !== null && firstName.trim () !== "") {
            let lastName = prompt ("Enter Last Name");
        if (lastName !== null && lastName.trim () !== "") {
            let employeeSalary = prompt ("Enter Employee's Salary");
        if (employeeSalary === null || isNaN(parseFloat(employeeSalary.trim()))) {
                    employeeSalary = 0;
        } else {
            employeeSalary = parseFloat(employeeSalary.trim());
        }
        
        let employee = {
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            salary: employeeSalary
        };

        employees.push(employee);

        let employeeList = document.querySelector(".employee-list");
        let newListItem = document.createElement("li");
        newListItem.textContent = `${employee.firstName} ${employee.lastName} $${employee.salary}`;
        employeeList.appendChild(newListItem);

        keepPrompting = confirm ("Do you want to add another employee?");
    

       }
     }
  }
  return employees;
}

function displayAverageSalary () {
    let totalSalary = 0;
    for (let n = 0; n < employees.length; n++) {
        totalSalary += employees[n].salary;
    }
    let averageSalary = totalSalary/employees.length;
    console.log(`Average Salary: $${averageSalary}`);
}

