```javascript
// WDD 131 - Week 02
// JavaScript Constructs
// Rosario Guinhane


// ========================================
// 1. VARIABLES
// ========================================

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];


// ========================================
// 2. FOR LOOP
// Display values less than LIMIT
// ========================================

console.log("FOR LOOP:");

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}


// ========================================
// 3. WHILE LOOP
// Display values less than LIMIT
// ========================================

console.log("WHILE LOOP:");

let i = 0;

while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }

    i++;
}


// ========================================
// 4. FOREACH LOOP
// Display values less than LIMIT
// ========================================

console.log("FOREACH LOOP:");

studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});


// ========================================
// 5. FOR...IN LOOP
// Display values less than LIMIT
// ========================================

console.log("FOR...IN LOOP:");

for (let index in studentReport) {
    if (studentReport[index] < LIMIT) {
        console.log(studentReport[index]);
    }
}


// ========================================
// 6. FUTURE DAYS
// Generate the names of the next DAYS days
// starting from today
// ========================================

console.log("NEXT 6 DAYS:");

const today = new Date();
const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

for (let day = 0; day < DAYS; day++) {
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + day);

    const dayName = daysOfWeek[futureDate.getDay()];

    console.log(dayName);
}
```
