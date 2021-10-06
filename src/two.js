function fizzbuzzgame(i) {
    if(i % 15 === 0) return 'fizz buzz';
    if(i % 3 === 0) return 'fizz';
    if(i % 5 === 0) return 'buzz';
    return i;
  }
  
  
  for(let i = 0; i <= 100; i++) {
    console.log(fizzbuzzgame(i));
  }