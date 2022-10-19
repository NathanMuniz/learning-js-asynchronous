fecthPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

console.log(fetchPromise); // Promise { <state>: "pending" }

fetchPromise.then((response) => {
  console.log(`Response status: ${response.status}`)
});

console.log("Started request...");
