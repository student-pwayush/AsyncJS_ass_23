// (1) = Web storage, web applications can store data locally within the user's browser.

// (2) = Before HTML5, application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data can be stored locally, without affecting website performance.

// (3) = Unlike cookies, the storage limit is far larger (at least 5MB) and information is never transferred to the server.

// (4) = Web storage is per origin (per domain and protocol). All pages, from one origin, can store and access the same data.


// The Storage are 2 types :-
// (1) = window.localStorage - (stores data with no expiration date)

// (2) = window.sessionStorage - (stores data with expiration date)



// function clickCounter() {
//     if (typeof(Storage) !== "undefined") {
//       if (localStorage.clickcount) {
//         localStorage.clickcount = Number(localStorage.clickcount)+1;
//       } else {
//         localStorage.clickcount = 1;
//       }
//       document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
//     } else {
//       document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
//     }
//   }


  //************************************************************************************************
// Removing data from localStorage
//const parameter = localStorage.removeItem('theme');
 // Storing data in localStorage
//   const parameter1 = ('JohnDoe');
//  const parameter2 = ('theme', 'dark');
// // Retrieving data from localStorage
// const parameter = ('username');
// console.log('parameter:', parameter2);


//*******************************************************************************************
// // Storing data in sessionStorage
const Items1 = sessionStorage.cartItems;
const items2 = sessionStorage.cartItems;
sessionStorage.setItem('cartItems', JSON.stringify(['item1', 'item2']));

// Retrieving data from sessionStorage
const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
console.log('Cart Items:', cartItems);

// Removing data from sessionStorage
sessionStorage.removeItem('cartItems');

