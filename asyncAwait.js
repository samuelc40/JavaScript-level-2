
// const promise = new Promise((resolve,  reject) => {
//     // resolve(["Javascript", 'Java']);
//     reject("API Failed!")
// })

// const fetchData = async () => {
//     try {
//         const response = await promise;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// };

// fetchData();


const fetchAPIData = async () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}

fetchAPIData(); 

