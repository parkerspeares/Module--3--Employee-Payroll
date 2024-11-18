Employee Tracker (Challenge-03)
Introduction
Welcome to the Challenge-03 Employee Tracker! This application was developed as part of the third-week coding bootcamp challenge. It serves as a simple tool to track employees' first names, last names, and salaries.

Installation
No installation is needed! To explore the site, click this link: Employee Tracker Website, which will take you directly to the deployed application.

Usage
Using this site is straightforward:

Open the page, and you'll be prompted to enter an employee's full name and salary.
After entering the details, you’ll be asked if you want to log another employee.
This process repeats until you select "Cancel."
Once finished, all the employees entered will be displayed in a list on the screen.
If you wish to add more employees later, simply click the "Add Employees" button to start the loop again.

Bonus Features (Console Tools)
Salary Average Calculator: Calculates the average salary of all logged employees.
Random Employee Selector: Picks a random employee and rewards them!
These tools can be accessed via the browser’s console.

Code Snippet
Here’s an excerpt from the script that handles employee data creation:

javascript
Copy code
const collectEmployees = function () {
  let row = document.createElement("tr");
  
  while (redo == true) {
    // Prompt user for their name
    let person = prompt("Please enter your first and last name!");

    // Split name into first and last name and add to respective arrays
    const fullname = person.split(" ", 2);
    employee.firstName.push(fullname[0]);
    employee.lastName.push(fullname[1]);

    // Prompt user for their salary and add to array
    let salaryP = prompt("Please enter your salary.");
    employee.salary.push(parseInt(salaryP));

    // Increment employee count
    empLength++;

    // Ask if user wants to add another employee
    redo = confirm("Would you like to log another employee?");
  }

  // Reset redo for future use
  redo = true;

  // Return the employee data
  return employee;
};
This function gathers employee data by prompting the user for details. It splits the name into first and last names, stores them in separate arrays, and logs the salary. The loop continues until "Cancel" is selected.

Credits
Parker Speares 
