var throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
  button: document.querySelector('.feedback-form button'),
};
const STORAGE_KEY = 'message';

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onInputType, 500));
refs.textarea.addEventListener('input', throttle(onTextareaType, 500));

populateTextarea();
// const formInputs = {
//   email: '',
//   message: '',
// };

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onInputType(evt) {
  // formInputs.email = evt.currentTarget.value;
}
function onTextareaType(evt) {
  // formInputs.message = evt.currentTarget.value;
  localStorage.setItem(STORAGE_KEY, evt.target.value);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}
// localStorage.setItem('feedback-form-state', JSON.stringify(formInputs));
// console.log(formInputs);
