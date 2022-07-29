const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
  button: document.querySelector('.feedback-form button'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', onInputType);
refs.textarea.addEventListener('input', onTextareaType);

function onFormSubmit(evt) {
  evt.preventDefault();
}

function onInputType(evt) {
  const message = evt.currentTarget.value;
}
function onTextareaType(evt) {
  const message = evt.currentTarget.value;
}
