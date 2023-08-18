import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const STORAGE_KEY = 'videoplayer-current-time';

formRef.addEventListener('input', throttle(inputFormFieldHandler, 500));
formRef.addEventListener('submit', submitFormHandler);

fillForm(formRef);

function inputFormFieldHandler(event) {
  const fieldRef = event.target;

  const stringDataFromStorage = localStorage.getItem(STORAGE_KEY);
  const FormData = stringDataFromStorage
    ? JSON.parse(stringDataFromStorage)
    : {};

  FormData[fieldRef.name] = fieldRef.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(FormData));
}

function submitFormHandler(event) {
  event.preventDefault();

  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

function fillForm(formRef) {
  const stringDataFromStorage = localStorage.getItem(STORAGE_KEY);
  if (!stringDataFromStorage) {
    return;
  }
  const FormData = JSON.parse(stringDataFromStorage);
  const dataKeys = Object.keys(FormData);

  for (const key of dataKeys) {
    formRef.elements[key].value = FormData[key];
  }
}
