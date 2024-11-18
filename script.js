// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');



// Collect employee data
const collectEmployees = function () {
  // Collecting user input data to create and return an array of employee objects
  // let employeeCount = parseInt(prompt("Enter the number of employees:"));
  let employeesArray = [];
  let continueAdd = true;

  while(continueAdd){

  //for (let i = 0; i < employeeCount; i++) {
    let firstName = prompt(`Enter First name for employee:`);
    while(firstName == null && firstName == ""){
       firstName = prompt(`Enter First name for employee:`);
    }
    let lastName = prompt(`Enter Last name for employee:`);
    while(lastName == null && lastName == ""){
       lastName = prompt(`Enter Last name for employee:`);
    }
    let salary = prompt(`Enter salary for employee:`);

    if(isNaN(salary)){
      salary = 0
    }
    
     let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary),
    }
    employeesArray.push({...employee});
 

    continueAdd = confirm("Add more Employees?")
  }

  return employeesArray;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees to calculate salary.");
    return;
  }

  // Calculate the average salary
  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  console.log(totalSalary);
  const averageSalary = (totalSalary / employeesArray.length);
  console.log(averageSalary);

  // Display the average salary
  console.log(`The average emmployee salary between our ${employeesArray.length} employee(s) is ${averageSalary.toFixed(2)}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees to select from.");
    return;
  }

  // Select a random employee from the array
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];

  // Display the random employee
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
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
