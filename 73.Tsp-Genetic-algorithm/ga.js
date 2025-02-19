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
      fitness[i] = 1 / (pow(d, 8) + 1);  // Inverse distance for fitness
    }
  }
  
  function normalizeFitness() {
    let sum = 0;
    for (let i = 0; i < fitness.length; i++) {
      sum += fitness[i];
    }
    for (let i = 0; i < fitness.length; i++) {
      fitness[i] = fitness[i] / sum;  // Normalize fitness values to sum to 1
    }
  }
  