// Basic constructed Promise
//

const isThereTimeToGame = new Promise((resolve, reject) => {
  setTimeout(() => {
    Math.random() > 0.5
      ? resolve("Yes, there is time to game")
      : reject("No, there is no time to game");
  }, 100);
});

console.log(isThereTimeToGame);

isThereTimeToGame
  .then((success) => console.log(success))
  .catch((error) => console.error(error));

//
// Fetch with .then/.catch
//

const fetchFunction = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Something went wrong. Status: ${response.status}`);
      }
    })
    .then((final) => console.log(final))
    .catch((error) => console.log(error));
};

fetchFunction();

//
// Fetch with async/await
//

const fetchFunctionAsync = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    if (!response.ok) {
      throw new Error(`Something went wrong. Status: ${response.status}`);
    }
    const final = await response.json();
    console.log(final);
  } catch (error) {
    console.log(error);
  }
};

fetchFunctionAsync();
