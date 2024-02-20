// Specifications :
// ○ Create a shooting game between two player
// ○ Each player has three properties : name, health and power
// ○ Each player will take turns to shooting
// ○ Before shooting, players get a chance to get random items (health +10 or power +10)
// ○ The game will continue until one of the players has health < 0
// ● Requirements :
// ○ Create ShootingGame & Player class
// ○ ShootingGame class :
// ■ constructor(player1, player2) → player objects as a parameter
// ■ getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
// ■ start() → start shooting games
// ○ Player class :
// ■ Property → name, health (default 100), power (default 10)
// ■ hit(power) → subtract player health
// ■ useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
// ■ showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)
// ○ ShootingGame start() function flow :
// ■ In every turn :
// ● Show each player status before shooting
// ● Get random item for each player before shooting
// ● Show each player status after shooting
// ■ Show winner name

// class Player {
//   constructor(name, health = 100, power = 10) {
//     this.name = name;
//     this.health = health;
//     this.power = power;
//   }

//   damage(power) {
//     this.health -= power;
//   }

//   useItem(item) {
//     this.health += item.health;
//     this.power += item.power;
//   }

//   showStatus() {
//     return `${this.name} (Health => ${this.health}, Power => ${this.power})`
//   }
// }

// class ShootingGame {
//   constructor(player1, player2) {
//     this.player1 = player1;
//     this.player2 = player2;
//   }

//   getRandomItem() {
//     const health = Math.random() < 0.5 ? 0 : 10;
//     const power = Math.random() < 0.5 ? 0 : 10;
//     return (health, power);
//   }
//   start() {
//     while(this.player1.health > 0 && this.player2.health>0){
//       this.player1.showStatus();
//       this.player2.showStatus();
  
//       const itemPlayer1 = this.getRandomItem();
//       const itemPlayer2 = this.getRandomItem();
  
//       this.player1.useItem(itemPlayer1);
//       this.player2.useItem(itemPlayer2);
  
//       this.player1.damage(this.player2.power);
//       this.player2.damage(this.player1.power);
  
//       this.player1.showStatus();
//       this.player2.showStatus();
      
//     }
    
//     if(this.player1.health <= 0) {
//       return `${this.player2.name} win`
//     } else {
//       return `${this.player1.name} win`
//     }
//   }
// }


// const player1 = new Player("Budi");
// const player2 = new Player("Siti");
// const game = new ShootingGame(player1, player2);
// console.log(game.start())


  // Exercise - Employee Salary
// ● Specifications :
// ○ Create a program to calculate total salary based on employee type
// ○ There are two types of employee : full-time & part-time
// ○ Salary for full-time employee :
// ■ IDR 100.000 / hour
// ■ IDR 75.000 / hour, if the number of working hours per day is more than 6 hours
// ○ Salary for part-time employee :
// ■ IDR 50.000 / hour
// ■ IDR 30.000 / hour, if the number of working hours per day is more than 6 hours
// ● Requirements :
// ○ Create an Employee as a parent class
// ○ Create a FulltimeEmployee and ParttimeEmployee as a child of Employee class
// ■ Create a method in that class to add working hour per day
// ■ Create a method in that class to calculate total salary
// ○ Use inheritance concept


// class Employee {
//   constructor(baseSalary) {
//     this.baseSalary = baseSalary;
//     this.workingHours = 0;
//   }
  
//   addWorkingHours(hours) {
//     this.workingHours += hours;
//   }

//   calculateSalary() {
//     return this.baseSalary;
//   }
// }

// class FullTimeEmployee extends Employee {
//   constructor(baseSalary, overtimeSalary) {
//     super(baseSalary);
//     this.overtimeSalary = overtimeSalary;
//   }

//   calculateSalary() {
//     if (this.workingHours > 6) {
//       return ((6 * this.baseSalary) + ((this.workingHours - 6) * this.overtimeSalary)).toLocaleString("id-ID");
//     } else {
//       return (this.baseSalary * this.workingHours).toLocaleString("id-ID");
//     }
//   }
// }

// class PartTimeEmployee extends Employee {
//   constructor(baseSalary, overtimeSalary) {
//     super(baseSalary);
//     this.overtimeSalary = overtimeSalary
//   }

//   calculateSalary() {
//     if (this.workingHours > 6) {
//       return ((6 * this.baseSalary) + ((this.workingHours - 6) * this.overtimeSalary)).toLocaleString("id-ID");
//     } else {
//       return (this.baseSalary * this.workingHours).toLocaleString("id-ID");
//     }
//   }
// }

// const fullTime = new FullTimeEmployee(100000,75000);
// fullTime.addWorkingHours(7);
// console.log(fullTime.calculateSalary());

// const partTime = new PartTimeEmployee(50000, 30000);
// partTime.addWorkingHours(8);
// console.log(partTime.calculateSalary());



class Employee {
  constructor(name) {
    this.name = name;
    this.workingHours = 0;
  }
}

class FulltimeEmployee extends Employee {
  constructor(name) {
    super(name);
  }

  addWorkingHours (hours) {
    this.workingHours += hours;
  }

  calculateTotalSalary() {
    const normalRate = 100000;
    const overTimeRate = 75000;

    if(this.workingHours <= 0) {
      return {
        total: "Rp" + (this.workingHours * normalRate).toLocaleString("id-ID")
      };
    } else {
      const normalHour = 6;
      const overTimeHour = this.workingHours - normalHour;

      return {
        total: "Rp" + (overTimeHour*overTimeRate + normalHour*normalRate).toLocaleString("id-ID")
      };
    }
  }
}

class ParttimeEmployee extends Employee {
  constructor(name) {
    super(name);
  }

  addWorkingHours (hours) {
    this.workingHours += hours;
  }

  calculateTotalSalary() {
    const normalRate = 50000;
    const overTimeRate = 30000;

    if(this.workingHours <= 0) {
      return {
        total: "Rp" + (this.workingHours * normalRate).toLocaleString("id-ID")
      };
    } else {
      const normalHour = 6;
      const overTimeHour = this.workingHours - normalHour;

      return {
        total: "Rp" + (overTimeHour*overTimeRate + normalHour*normalRate).toLocaleString("id-ID")
      };
    }
  }
}

const employee1 = new FulltimeEmployee("Budi");
employee1.addWorkingHours(7);
console.log(employee1.calculateTotalSalary())

const employee2 = new ParttimeEmployee("Siti");
employee2.addWorkingHours(6);
console.log(employee2.calculateTotalSalary())

