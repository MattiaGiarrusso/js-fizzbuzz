// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// Servono i numeri da 1 a 100

const numbContainer = document.querySelector('#numbers-container');

for (let i = 1; i <= 100; i++) {
    
    
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    
    // se il numero è divisibile per 3 e 5, la classe sarà 'FizzBuzz'
    // se il numero è divisibile solo per 3, la classe sarà 'Fizz'
    // se il numero è divisibile solo per 5, la classe sarà 'Buzz'
    // altrimenti comparirà solo il numero

    let numberContent = i;
    if(i % 3 === 0 && i % 5 === 0 ) {
        numberContent = 'FizzBuzz'
        newBox.classList.add('fizzbuzz');
    } else if (i % 3 === 0) {
        numberContent = 'Fizz'
        newBox.classList.add('fizz');
    } else if (i % 5 === 0) {
        numberContent = 'Buzz'
        newBox.classList.add('buzz');
    }

    newBox.innerHTML = numberContent;
    newBox.classList.add('box');
    console.log(newBox);
    numbContainer.append(newBox);
}