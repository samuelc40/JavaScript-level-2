// function getDataFromAPI(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num);
//         }, 1000)
//     })
// }

// function getDataFromAPI2(num) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(num + 5);
//         }, 1000)
//     })
// }

// console.log(5);

// getDataFromAPI2(5)
//     .then((response) => {
//         return getDataFromAPI(response + 5);
//     })
//     .then((response) => {
//             console.log(response);
//     })


//-------------------------------------------------------------


// console.log("Starting");

// function getDataFromAPI(callback) {
//     setTimeout(() => {
//         callback(5);
//     }, 3000);
// }

// getDataFromAPI((value1) => {
//     getDataFromAPI((value2) => {
//         getDataFromAPI((value3) => {
//             console.log(value1 + value2 + value3);
//         })
//     })
// })

// console.log("End");

//----------------------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//     reject("Failed");
// });

// promise

//     .then((response) => {
//         console.log(response);
//     })

//     .catch((error) => {
//         console.log(error)
//     });


//----------------------------------------------------------------


// const promise1 = new Promise((resolve, reject) => {
//     // resolve(["Javascript", 'Java']);
//     reject("API Failed!")
// })

// const promise2 = new Promise((resolve, reject) => {
//     resolve(["React", "Angular"]);
// })

// // promise1.then((response) => {
// //     console.log(response);
// // })

// // promise2.then((response) => {
// //     console.log(response);
// // })

// const allPromise = Promise.allSettled([promise1, promise2]);

// allPromise.then((response) => {
//     console.log(response);
// })
// // .catch((error) => {
// //     console.log(error);
// // })

//----------------------------------------------------------------

function sortByProperty(array, property) {
    return array.sort((a, b) => a[property] - b[property]);
}

const arrayOfObjects = [
    {'name': 'John', 'age': 25},
    {'name': 'Alice', 'age':30},
    {'name': 'Bob','age':20}
];

const sortedByAge = sortByProperty(arrayOfObjects, 'age');
console.log(sortedByAge);
