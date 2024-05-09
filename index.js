let employeesDB = {};

function Employee(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
}

function createEmployeeRecord(employeeID, name, age, position) {
    if (!employeesDB[employeeID]) {
        
        let newEmployee = new Employee(name, age, position);
        employeesDB[employeeID] = newEmployee;
        console.log(`Працівник з ID ${employeeID} успішно доданий.`);
    } else {
        console.log(`Працівник з ID ${employeeID} вже існує.`);
    }
}
function deleteEmployeeRecord(employeeID) {
    if (employeesDB[employeeID]) {
        delete employeesDB[employeeID];
        console.log(`Запис про працівника з ID ${employeeID} видалено.`);
    } else {
        console.log(`Працівник з ID ${employeeID} не знайдений.`);
    }
}
function updateEmployeeRecord(employeeID, newData) {
    if (employeesDB[employeeID]) {
        if (!Object.isFrozen(employeesDB[employeeID])) {
            Object.assign(employeesDB[employeeID], newData);
            console.log(`Інформація про працівника з ID ${employeeID} оновлена.`);
        } else {
            console.log(`Оновлення працівника з ID ${employeeID} неможливе. Запис заморожений.`);
        }
    } else {
        console.log(`Працівник з ID ${employeeID} не знайдений.`);
    }
}
function displayEmployeeRecord(employeeID) {
    if (employeesDB[employeeID]) {
        let employee = employeesDB[employeeID];
        console.log(`Інформація про працівника з ID ${employeeID}:`);
        console.log(`Ім'я: ${employee.name}`);
        console.log(`Вiк: ${employee.age}`);
        console.log(`Відділ: ${employee.position}`);
    } else {
        console.log(`Працівник з ID ${employeeID} не знайдений.`);
    }
}
function freezeEmployeeRecord(employeeID) {
    if (employeesDB[employeeID]) {
        Object.freeze(employeesDB[employeeID]);
        console.log(`Запис про працівника з ID ${employeeID} заморожено.`);
    } else {
        console.log(`Працівник з ID ${employeeID} не знайдений.`);
    }
}
function displayEmployeesList() {
    console.log("Список працівників:");
    Object.keys(employeesDB).forEach(employeeID => {
        console.log(`ID: ${employeeID}, Ім'я: ${employeesDB[employeeID].name}, Вiк: ${employeesDB[employeeID].age}, Відділ: ${employeesDB[employeeID].department}`);
    });
}

createEmployeeRecord(1, 'Іван Петров', '25', 'Технічний відділ');



displayEmployeeRecord(1);
updateEmployeeRecord(1, { age: '25', department: 'Розробка' });
displayEmployeeRecord(1);
freezeEmployeeRecord(1);

updateEmployeeRecord(1, { age: '25', department: 'Розробка' });
displayEmployeesList();
deleteEmployeeRecord(1)
displayEmployeeRecord(1);