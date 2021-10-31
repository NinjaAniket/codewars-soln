function cakes(recipe, available) {
  // TODO: insert code
  let numCakes;

  for (let ingredient in recipe) {
    if (available[ingredient]) {
      const amtPerCake = recipe[ingredient];
      amtPerCake;

      const amtAvailable = available[ingredient];
      amtAvailable;

      const possibleNumCakes = Math.floor(amtAvailable / amtPerCake);
      possibleNumCakes;

      if (!numCakes || possibleNumCakes < numCakes) {
        numCakes = possibleNumCakes;
      }
    } else return 0;
  }

  return numCakes;
}

recipe = { flour: 500, sugar: 200, eggs: 1 };
available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available));

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };

console.log(cakes(recipe, available));
