const inputNumber = document.querySelector('#inputNumber');
const submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    if(inputNumber.value % 3 === 0) {
        console.log('Fizz');
        inputNumber.value = '';
    } else if(inputNumber.value % 5 === 0) {
        console.log('Buzz');
        inputNumber.value = '';
    } else if(inputNumber.value % 3 === 0 && inputNumber.value % 5 === 0) {
        console.log('FizzBuzz');
        inputNumber.value = '';
    } else if(inputNumber.value % 3 !== 0 || inputNumber.value % 5 !== 0) {
        console.log(inputNumber.value);
        inputNumber.value = '';
    } else {
        console.log('masukan angka yg benar');
        inputNumber.value = '';
    }
});