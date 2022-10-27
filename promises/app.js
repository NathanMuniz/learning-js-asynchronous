//const fetch = require('node-fetch');
const { throws } = require('assert');
const fs = require('fs');

// Callbacks 

/*
setTimeout(() => {
  console.log("Waited 1 second")
}, 1000)


*/

/*
setTimeout(() => {
  console.log('3');
  setTimeout(() => {
    console.log('2');
    setTimeout(() => {
      console.log('1');
    }, 1000)
  }, 1000)
}, 1000)
 */


//error first callback 
/*
fs.readFile('./test.txt', { encoding: 'utf-8' }, (err, data) => {
  if (err) {
    console.error('ERROR');
    console.error(err);
  } else {
    console.error('GOT DATA');
    console.log(data);
  }
});
*/

async function fetchProducts() {
  try {
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`HTTP error:  ${response.status}`)
    }

    const data = await response.json();
    console.log(data[0].name);
  }
  catch (error) {
    console.error(`Could not get prodcts: ${error}`);
  }
}

fetchProducts();
console.log("next")
console.log("waiting")






