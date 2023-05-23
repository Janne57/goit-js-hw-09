import Notiflix from 'notiflix';

const refs = {
  formCreateProm: document.querySelector('.form'),
  formElements: document.querySelector('.form').elements,
}

refs.formCreateProm.addEventListener('submit', onSubmit);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
     
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);

  });
};




function  onSubmit(event) {
  event.preventDefault();

  const delay = Number(refs.formElements['delay'].value);
  const step = Number(refs.formElements['step'].value);
  const position = Number(refs.formElements['amount'].value);
  intervalId: null;

  intervalId = setInterval(function timeout(){
 
      for (let i = position - 1; i >= 0; i -= 1) {
        createPromise(position, delay)
        .then(({ position, delay }) => { 
          Notiflix.Notify.info (`✅ Fulfilled promise ${position - i} in ${delay + step * (position - i - 1)}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure (`❌ Rejected promise ${position - i} in ${delay + step * (position - i - 1)}ms`);
        });

          if ( i === 0 )  {
          clearInterval(intervalId);
        }
      }
    }, 
step);
};






















// function perfomP () {
//   for (let position = 0; position < 5; position += 1 ) {
//   console.log('positionI', position);
//   }
// }
// console.log(perfomP());


// const makeGreeting = guestName => {
//   if (guestName === "" || guestName === undefined) {
//     return Promise.reject("Guest name must not be empty");
//   }

//   return Promise.resolve(`Welcome ${guestName}`);
// };

// makeGreeting("")
//   .then(greeting => console.log(greeting))
//   .catch(error => console.error(error));


// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Final task");
//   });


// setTimeout(function timeout(){
//   console.log('hi');
// }, 1000);

// setTimeout(function timeout(){
//   console.log('hi');
// }, 2500);

// setTimeout(function timeout(){
//   console.log('hi');
// }, 3500);

// setTimeout(function timeout(){
//   console.log('hi');
// }, 4500);

// setInterval(function timeoutt(){
//   console.log('hello');
// }, 1500);
// let amount = 1;

// intervalId = setInterval(function timeout(){
  
//   createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     // console.log(position, delay);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
  
//   // console.log('trt');
//   if (amount > positionEl) {
//     clearInterval(intervalId);
//   }
//   amount += 1;
// }, 
// 1500);



// // console.log(createPromise(3, 1500));

  // createPromise(2, 1500)
  // .then(({ position, delay }) => {
  //   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //   // console.log(position, delay);
  // })
  // .catch(({ position, delay }) => {
  //   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  // });







  // [1, 2, 3, 4, 5].forEach(function (i) {
//   console.log('processing sinch');
//   delay(); 
// });

// function myCykl(array, cb){
//   array.forEach(function () {
//     setTimeout(cb, 0);
//     // setTimeout(function timeout(){
//       // console.log('hello');
//     // }, 4500);

//   })
// };



// myCykl([1, 2, 3, 4, 5], function (i) {
//   console.log('processing asinch', i);
//   delay();
  
// })

// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise("promiseA value", 1000);
// const promiseB = makePromise("promiseB value", 3000);

// Promise.all([promiseA, promiseB])
//   .then(value => console.log(value)) //["promiseA value", "promiseB value"]
//   .catch(error => console.log(error));

// function perfomP (positionI) {
// //   for (let position = 0; position =< positionI; position += 1 ) {
// //   createPromise(position, delay)
// //   .then(({ position, delay }) => {
// //     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// //     // console.log(position, delay);
// //   })
// //   .catch(({ position, delay }) => {
// //     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// //   });
// // };
// return console.log('positionI', positionI);
// };
//     var i = document.querySelector('.form').elements;
// console.log('i', i);
// console.log(i['delay'].value);
// console.log(i['step']);
// console.log(i['amount']);



//   console.log('delay', delay);
// console.log(step);
// console.log(position);
// const {
//   elements: {delay, step, amount}
// } = event.currentTarget;

// const elements.delay = event.currentTarget;
// console.log(delay.value);
// console.log(delay.value, step.value, amount.value);
// console.log(delay.type);
  // console.log(event.currentTarget.value);
  // console.log(event);
  // console.log(event.value);
    // console.log(refs.formElements['delay'].value);
    // console.log(refs.formElements['step'].value);
    // console.log(refs.formElements['amount'].value);


    // var i = document.querySelector('.form').elements;
// console.log('i', i);
// console.log(i[delay]);
// console.log(i[step]);
// console.log(i[step]);


// console.log(refs.formCreateProm);
// console.log(refs.formCreateProm.value);
// console.log(refs.amountCreateProm);