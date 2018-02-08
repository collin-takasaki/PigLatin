function piglatin(list){
  return _.map(list, word=> `${word}-ay`);
}

console.log(piglatin(['apple', 'pearl']))

