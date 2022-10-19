/*
fecthPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

console.log(fetchPromise); // Promise { <state>: "pending" }

fetchPromise.then((response) => {
  console.log(`Response status: ${response.status}`)
});

console.log("Started request...");

*/



/*
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name)
  });
});
*/


/* rewriting - when you has alot promises */

/*
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });

*/

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');


fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });

