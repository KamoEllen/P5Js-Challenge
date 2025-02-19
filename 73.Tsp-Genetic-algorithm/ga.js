function calculateFitness() {
    let currentRecord = Infinity;
    for (let i = 0; i < population.length; i++) {
      const d = calcDistance(cities, population[i]);
      if (d < recordDistance) {
        recordDistance = d;
        bestEver = population[i];
      }
      if (d < currentRecord) {
        currentRecord = d;
        currentBest = population[i];
      }
      fitness[i] = 1 / (pow(d, 8) + 1); 
    }
  }
  function nextGeneration() {
    const newPopulation = [];
    for (let i = 0; i < population.length; i++) {
      const orderA = pickOne(population, fitness);
      const orderB = pickOne(population, fitness);
      const order = crossOver(orderA, orderB);
      mutate(order, 0.01);
      newPopulation[i] = order;  
        }
    population = newPopulation;
  }
  
  function normalizeFitness() {
    let sum = 0;
    for (let i = 0; i < fitness.length; i++) {
      sum += fitness[i];
    }
    for (let i = 0; i < fitness.length; i++) {
      fitness[i] = fitness[i] / sum;  
    }
  }
  