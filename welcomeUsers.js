var usersArr = [
    {username: 'Jan Kowalski', birthYear: 1983, salary: 4200},
    {username: 'Anna Nowak', birthYear: 1994, salary: 7500},
    {username: 'Jakub Jakubowski', birthYear: 1985, salary: 18000},
    {username: 'Piotr Kozak', birthYear: 2000, salary: 4999},
    {username: 'Marek Sinica', birthYear: 1989, salary: 7200},
    {username: 'Kamila Wiśniewska', birthYear: 1972, salary: 6800},
    ];

function welcomeUsers(usersArr){
    let currentDate = new Date();
    for(var i = 0; i < usersArr.length; i++){
            if(usersArr[i].salary > 15000) {
                console.log("Witaj prezesie!");
            } else if(usersArr[i].salary < 5000) {
                console.log(usersArr[i].username + ", szykuj się na podwyżkę!");
            } else if(usersArr[i].birthYear % 2 == 0) {
                console.log("Witaj, " + usersArr[i].username + "! W tym roku kończysz " + (currentDate.getFullYear() - usersArr[i].birthYear) + " lat!");
            } else if (usersArr[i].birthYear % 2 != 0) {
                console.log(usersArr[i].username + ", jesteś zwolniony!");
            }
        }
    }

welcomeUsers(usersArr);