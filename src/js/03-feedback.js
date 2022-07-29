var throttle = require('lodash.throttle');

const FORM_INPUTS = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
const formData = {};

populateInput(getFormData());
populateEmail(getFormData());

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();
  localStorage.removeItem(FORM_INPUTS);
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(FORM_INPUTS, JSON.stringify(formData));
}

function populateEmail(data) {
  data?.email ? (refs.input.value = data.email) : '';
}
function populateInput(data) {
  data?.message ? (refs.textarea.value = data.message) : '';
}

function getFormData() {
  try {
    return JSON.parse(localStorage.getItem(FORM_INPUTS));
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
}
