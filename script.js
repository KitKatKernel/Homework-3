function collectEmployees() {
    let employees = [];
    let keepPrompting = true;
    while (keepPrompting) {
        let firstName = prompt ("Enter First Name");
        if (firstName !== null && firstName.trim() !== "") {
            let lastName = prompt ("Enter Last Name");
            if (lastName !== null && lastName.trim() !== "") {
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
                arrayEmployees.push(employee);

                addEmployeesToTable(employee);

                keepPrompting = confirm ("Do you want to add another employee?");
            }
        }
    }
}


const button = document.querySelector('button')
button.addEventListener('click', function (event) {
    collectEmployees();
})