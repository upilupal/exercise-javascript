// NO 2. ===================================================================================================================
//  Write a JavaScript function called phoneNumber that takes a single argument input.
//     The function is intended to format a phone number. It checks the input to ensure
//     it meets certain criteria and then proceeds with formatting. The formatting
//     includes replacing the leading "0" with "62" and creating a template in the
//     format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The
//     function returns the formatted phone number.

//     - Check if the input is of type "string." If it's not, return "Invalid phone number."
//     - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
//     - Make sure the input all are numeric 0-9
//     ex :
//     input = "085244455555"
//     output = "(6285)-2444-55555"

// function phoneNum(number) {
//     if(typeof number !== "string") {
//         return "invalid phone number";
//     };

//     if (number.length !== 12) {
//         return "invalid phone number";
//     };

//     for(let i=0; i<number.length;i++) {
//         if(number[i] < "0" || number[i]>"9") {
//             return "invalid phone number"
//         }
//     }

//     number = "62" + number.slice(1);
//     let template = "(xxxx)-xxxx-xxxxx";
    
//     number.split("").forEach((item) => {
//         template = template.replace("x", item);
//     });

//     return template;
// }

// console.log(phoneNum("085244455555"));

// NO 1 ============================================================================================================

//  You are given a JavaScript class called Train that simulates a train's passenger management system.
//     The Train class has the following methods and properties:

//     - constructor(): Initializes the Train with an initial passenger, "masinis," and a maximum
//     capacity of 10 passengers.
//     - isFull(): Checks if the train is at full capacity. It returns true if the train is full
//     and false otherwise.
//     - isEmpty(): Checks if the train has no passengers except "masinis." It returns true if the
//     train is empty and false otherwise.
//     - showPassenger(): Returns an object that contains the list of passengers on the train and
//     the remaining available seats.
//     - passengerIn(name): Adds a passenger with the given name to the train. It returns "add passenger
//     success" if the passenger is successfully added, "train full" if the train is at full capacity,
//     and "passenger already exists" if the passenger is already on the train.
//     - passengerOut(name): Removes a passenger with the given name from the train. It returns
//     "remove passenger success" if the passenger is successfully removed, "cannot remove masinis"
//     if an attempt is made to remove the "masinis," "train empty" if the train is already empty, and
//     "passenger not found" if the passenger with the given name is not found on the train.

// class Train {
//   constructor() {
//     this.passenger = ["masinis"];
//     this.capacity = 10;
//   }

//   isFull() {
//     return this.passenger.length >= this.capacity;
//   }

//   isEmpty() {
//     return this.passenger.length === 1;
//   }

//   showPassengers() {
//     const availableSeat = this.capacity - this.passenger.length;
//     return {
//       passenger: this.passenger.slice(1), // exclude masinis
//       availableSeat: availableSeat > 0 ? availableSeat : 0,
//     };
//   }

//   passengerIn(name) {
//     if (this.isFull()) {
//       return "kereta penuh";
//     }

//     if (this.passenger.includes(name)) {
//       return "penumpang sudah ada";
//     }

//     this.passenger.push(name);
//     return "berhasil menambahkan penumpang";
//   }

//   passengerOut(name) {
//     if (name === "masinis") {
//       return "tidak bisa remove masinis";
//     }

//     if (this.isEmpty()) {
//       return "kereta kosong";
//     }



//     const index = this.passenger.indexOf(name);

//     if (index !== -1) {
//       this.passenger.splice(index, 1);
//       return "berhasil remove penumpang";
//     } else {
//       return "penumpang tak ditemukan";
//     }
//   }
// }

// const train = new Train();
// console.log(train.passengerIn("masinis"));
// console.log(train.passengerOut("masinis"));
// console.log(train.passengerIn("naufal"));
// console.log(train.passengerIn("adi"));
// console.log(train.passengerIn("ryan"));
// console.log(train.passengerIn("aldo"));
// console.log(train.passengerIn("sandy"));
// console.log(train.passengerIn("rafi"));
// console.log(train.passengerIn("vincent"));
// console.log(train.passengerIn("muksal"));
// console.log(train.passengerIn("rahmat"));
// console.log(train.passengerIn("faisal"));

// console.log(train.showPassengers())
