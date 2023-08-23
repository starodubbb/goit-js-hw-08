import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');
const formElements = formRef.querySelectorAll('[name]');
const formElNames = Array.from(formElements).map(el => el.name);

let formData = getFormDataFromStorage() ?? {};
displayForm();

formRef.addEventListener('input', throttle(inputFormFieldHandler, 500));
formRef.addEventListener('submit', submitFormHandler);

function inputFormFieldHandler(event) {
  const fieldRef = event.target;

  formData[fieldRef.name] = fieldRef.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function submitFormHandler(event) {
  event.preventDefault();
  const isFullForm = checkIsFullForm(() => {
    alert('Please fill in all the fields!');
  });

  if (!isFullForm) {
    return;
  }

  console.log(formData);

  formData = {};
  localStorage.removeItem(STORAGE_KEY);
  event.currentTarget.reset();
}

function getFormDataFromStorage() {
  const stringDataFromStorage = localStorage.getItem(STORAGE_KEY);
  if (!stringDataFromStorage) {
    return null;
  }
  return JSON.parse(stringDataFromStorage);
}

function displayForm() {
  const dataKeys = Object.keys(formData);

  for (const key of dataKeys) {
    formRef.elements[key].value = formData[key];
  }
}

function checkIsFullForm(onEmpty) {
  for (const name of formElNames) {
    if (!formData[name] || formData[name] === '') {
      onEmpty?.();
      return false;
    }
  }
  return true;
}
