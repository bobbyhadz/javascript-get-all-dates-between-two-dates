// EXAMPLE 1 - Get all Dates between 2 Dates using JavaScript

function getDatesInRange(startDate, endDate) {
  const date = new Date(startDate.getTime());

  const dates = [];

  while (date <= endDate) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
}

const d1 = new Date('2022-01-18');
const d2 = new Date('2022-01-24');

console.log(getDatesInRange(d1, d2));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Excluding the start and end dates

// function getDatesInRange(startDate, endDate) {
//   const date = new Date(startDate.getTime());

//   // ✅ Exclude start date
//   date.setDate(date.getDate() + 1);

//   const dates = [];

//   // ✅ Exclude end date
//   while (date < endDate) {
//     dates.push(new Date(date));
//     date.setDate(date.getDate() + 1);
//   }

//   return dates;
// }

// const d1 = new Date('2022-01-18');
// const d2 = new Date('2022-01-24');

// console.log(getDatesInRange(d1, d2));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get all Dates in a Month using JavaScript

// function getAllDaysInMonth(year, month) {
//   const date = new Date(year, month, 1);

//   const dates = [];

//   while (date.getMonth() === month) {
//     dates.push(new Date(date));
//     date.setDate(date.getDate() + 1);
//   }

//   return dates;
// }

// const now = new Date();

// // 👇️ all days of the current month
// console.log(
//   getAllDaysInMonth(now.getFullYear(), now.getMonth()),
// );

// const date = new Date('2022-03-24');

// // 👇️ All days in March 2022
// console.log(
//   getAllDaysInMonth(date.getFullYear(), date.getMonth()),
// );

// ------------------------------------------------------------------

// // EXAMPLE 4 - If you have a Date string, pass it to the `Date()` constructor

// function getAllDaysInMonth(year, month) {
//   const date = new Date(year, month, 1);

//   const dates = [];

//   while (date.getMonth() === month) {
//     dates.push(new Date(date));
//     date.setDate(date.getDate() + 1);
//   }

//   return dates;
// }

// const date = new Date('2022-03-24');

// // 👇️ All days in March 2022
// console.log(
//   getAllDaysInMonth(date.getFullYear(), date.getMonth()),
// );

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get the Dates for the Past 7 Days using JavaScript

// // ✅ start from today's date
// const past7Days = [...Array(7).keys()].map(index => {
//   const date = new Date();
//   date.setDate(date.getDate() - index);

//   return date;
// });

// console.log(past7Days);

// // 👇️ [0, 1, 2, 3, 4, 5, 6]
// console.log([...Array(7).keys()]);

// ------------------------------------------------------------------

// // EXAMPLE 6 - Get the Dates for the Past 7 Days excluding today's date

// // ✅ start from yesterday's date
// const past7Days = [...Array(7).keys()].map(index => {
//   const date = new Date();
//   date.setDate(date.getDate() - (index + 1));

//   return date;
// });

// console.log(past7Days);
