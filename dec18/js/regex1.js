function countAnimals(animals,count){
  const result = new Array;
  count.forEach((animal) => {
    let population = animals.match(new RegExp(animal, "g"));
      if (population == null) {
        result.push(0);
      } else {
        result.push(population.length);
      }
    });
  return result;
}
