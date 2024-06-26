// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  let employees = [];
  let keepPrompting = true;
   while (keepPrompting) {
      let firstName = prompt("Enter First Name");
       if (firstName !== null && firstName.trim() !== "") {
          let lastName = prompt("Enter Last Name");
          if (lastName !== null && lastName.trim() !== "") {
              let employeeSalary = prompt("Enter Employee's Salary");
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
                
                keepPrompting = confirm("Do you want to add another employee?");
            }
        }
    }
    return employees;
  }

// Display the average salary
const displayAverageSalary = function(employeesArray) {
    if (employeesArray.length === 0) {
        console.log("Error - Get some employees!");
        return;
    }

    let totalSalary = 0;
    for (let i = 0; i < employeesArray.length; i++) {
        totalSalary += employeesArray[i].salary;
    }

    let averageSalary = totalSalary / employeesArray.length;
    console.log("Average Salary: $" + averageSalary);
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  if (employeesArray.length === 0) {
      return;
  }

  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  let randomEmployee = employeesArray[randomIndex];
  console.log(`Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
