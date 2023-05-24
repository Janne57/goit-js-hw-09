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

let delay = Number(refs.formElements['delay'].value);
const step = Number(refs.formElements['step'].value);
const position = Number(refs.formElements['amount'].value);

function timeout(){
      for (let i = 1; i <= position; i += 1) {

        createPromise(i, delay)
          .then(({ position, delay }) => { 
            Notiflix.Notify.info (`✅ Fulfilled promise ${i} in ${delay}ms`);
          })
          .catch(({ position, delay }) => {
            Notiflix.Notify.failure (`❌ Rejected promise ${i} in ${delay}ms`);
          });
        delay += step;
     }
    }

timeout();
};

